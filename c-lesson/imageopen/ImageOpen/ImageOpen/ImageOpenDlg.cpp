// ImageOpenDlg.cpp : 実装ファイル
//

#include "stdafx.h"
#include "ImageOpen.h"
#include "ImageOpenDlg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif


// アプリケーションのバージョン情報に使われる CAboutDlg ダイアログ

class CAboutDlg : public CDialog
{
public:
	CAboutDlg();

// ダイアログ データ
	enum { IDD = IDD_ABOUTBOX };

	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV サポート

// 実装
protected:
	DECLARE_MESSAGE_MAP()
};

CAboutDlg::CAboutDlg() : CDialog(CAboutDlg::IDD)
{
}

void CAboutDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
}

BEGIN_MESSAGE_MAP(CAboutDlg, CDialog)
END_MESSAGE_MAP()


// CImageOpenDlg ダイアログ




CImageOpenDlg::CImageOpenDlg(CWnd* pParent /*=NULL*/)
	: CDialog(CImageOpenDlg::IDD, pParent)
{
	m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);
}

void CImageOpenDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	DDX_Control(pDX, IDC_PICT, m_pict);
	DDX_Control(pDX, IDOK, m_button_OK);
	DDX_Control(pDX, IDCANCEL, m_button_Cancel);
}

BEGIN_MESSAGE_MAP(CImageOpenDlg, CDialog)
	ON_WM_SYSCOMMAND()
	ON_WM_PAINT()
	ON_WM_QUERYDRAGICON()
	//}}AFX_MSG_MAP
	ON_BN_CLICKED(IDOK, &CImageOpenDlg::OnBnClickedOk)
	ON_WM_SIZE()
END_MESSAGE_MAP()


// CImageOpenDlg メッセージ ハンドラ

BOOL CImageOpenDlg::OnInitDialog()
{
	CDialog::OnInitDialog();

	// "バージョン情報..." メニューをシステム メニューに追加します。

	// IDM_ABOUTBOX は、システム コマンドの範囲内になければなりません。
	ASSERT((IDM_ABOUTBOX & 0xFFF0) == IDM_ABOUTBOX);
	ASSERT(IDM_ABOUTBOX < 0xF000);

	CMenu* pSysMenu = GetSystemMenu(FALSE);
	if (pSysMenu != NULL)
	{
		CString strAboutMenu;
		strAboutMenu.LoadString(IDS_ABOUTBOX);
		if (!strAboutMenu.IsEmpty())
		{
			pSysMenu->AppendMenu(MF_SEPARATOR);
			pSysMenu->AppendMenu(MF_STRING, IDM_ABOUTBOX, strAboutMenu);
		}
	}

	// このダイアログのアイコンを設定します。アプリケーションのメイン ウィンドウがダイアログでない場合、
	//  Framework は、この設定を自動的に行います。
	SetIcon(m_hIcon, TRUE);			// 大きいアイコンの設定
	SetIcon(m_hIcon, FALSE);		// 小さいアイコンの設定

	// TODO: 初期化をここに追加します。

	inImage = 0;
	outImage = 0;
	lpInfo = 0;
	shouldResetImageSize = true;

	return TRUE;  // フォーカスをコントロールに設定した場合を除き、TRUE を返します。
}

void CImageOpenDlg::OnSysCommand(UINT nID, LPARAM lParam)
{
	if ((nID & 0xFFF0) == IDM_ABOUTBOX)
	{
		CAboutDlg dlgAbout;
		dlgAbout.DoModal();
	}
	else
	{
		CDialog::OnSysCommand(nID, lParam);
	}
}

// ダイアログに最小化ボタンを追加する場合、アイコンを描画するための
//  下のコードが必要です。ドキュメント/ビュー モデルを使う MFC アプリケーションの場合、
//  これは、Framework によって自動的に設定されます。

void CImageOpenDlg::OnPaint()
{
	if (IsIconic())
	{
		CPaintDC dc(this); // 描画のデバイス コンテキスト

		SendMessage(WM_ICONERASEBKGND, reinterpret_cast<WPARAM>(dc.GetSafeHdc()), 0);

		// クライアントの四角形領域内の中央
		int cxIcon = GetSystemMetrics(SM_CXICON);
		int cyIcon = GetSystemMetrics(SM_CYICON);
		CRect rect;
		GetClientRect(&rect);
		int x = (rect.Width() - cxIcon + 1) / 2;
		int y = (rect.Height() - cyIcon + 1) / 2;

		// アイコンの描画
		dc.DrawIcon(x, y, m_hIcon);
	}
	else
	{

		CRect rect;
		GetClientRect(&rect);
		m_pict.MoveWindow(10,10,rect.Width()-120,rect.Height()-20);

		m_button_OK.MoveWindow(rect.Width()-100,10,90,25);
		m_button_Cancel.MoveWindow(rect.Width()-100,40,90,25);

		CDialog::OnPaint();

		if(m_image && m_image2){

			CDC* pDC = m_pict.GetDC();

			// 2 枚の画像を表示する
			CDC* myDC = CDC::FromHandle(m_image.GetDC());
			CDC* myDC2 = CDC::FromHandle(m_image2.GetDC());

			int edgew = 2;
			pDC->BitBlt(edgew,edgew,m_image.GetWidth(),m_image.GetHeight(),myDC,0,0,SRCCOPY);
			pDC->BitBlt(m_image2.GetWidth()+10+edgew,edgew,m_image2.GetWidth(),m_image2.GetHeight(),myDC2,0,0,SRCCOPY);
			
			m_image.ReleaseDC();
			m_image2.ReleaseDC();

		}

	}
}

// ユーザーが最小化したウィンドウをドラッグしているときに表示するカーソルを取得するために、
//  システムがこの関数を呼び出します。
HCURSOR CImageOpenDlg::OnQueryDragIcon()
{
	return static_cast<HCURSOR>(m_hIcon);
}

void CImageOpenDlg::OnSize(UINT nType, int cx, int cy)
{
	CDialog::OnSize(nType, cx, cy);

	// TODO: ここにメッセージ ハンドラ コードを追加します。
	Invalidate();
}

void CImageOpenDlg::OnBnClickedOk()
{
	// TODO: ここにコントロール通知ハンドラ コードを追加します。

	CString m_filename;

	CFileDialog myDLG(TRUE,NULL,NULL,OFN_HIDEREADONLY|OFN_OVERWRITEPROMPT,
		"画像ファイル|*.BMP;*.JPG;*.JPEG;*.GIF;*.PNG||");

	if(myDLG.DoModal()!=IDOK) return;

	m_filename=myDLG.GetPathName();

	if (m_filename == ""){
		m_filename = "Please enter a file name first";
	}
	else
	{
		if(m_image) m_image.Destroy(); // 過去に読み込んだ画像は破棄

		if (m_image.Load(m_filename) == S_OK)  // ロードに成功したら
		{

			shouldResetImageSize = true;

			setupInImage();

			setupOutImage();

			Invalidate();  //　再描画 (OnPaint 関数呼び出し)
		}
		else
		{
			AfxMessageBox("File not found or invalid format");
		}
	}

}

void CImageOpenDlg::setupInImage(){
	if(inImage) delete[] inImage;
	if(lpInfo) free(lpInfo);

	// 元イメージのコピーを HBITMAP で作成する
	m_hBitmap = (HBITMAP)::CopyImage((HBITMAP)m_image,IMAGE_BITMAP,
		m_image.GetWidth(),m_image.GetHeight(),NULL/*LR_CREATEDIBSECTION*/);

	BITMAP bmp;                                  // BITMAP構造体
	GetObject(m_hBitmap, sizeof(BITMAP), &bmp);  // ヘッダ部をコピー

	mWidth = bmp.bmWidth;                      // 画像の幅
	mHeight = bmp.bmHeight;                    // 画像の高さ
	int mBitCount = bmp.bmBitsPixel;               // 1ドットを表すためのビット数
                                             // 他のメンバは省略
	if ((mWidth*3) % 4==0) /* バッファの１ラインの長さを計算 */
		mLength=mWidth*3;
	else
		mLength=mWidth*3+(4-(mWidth*3) % 4);
		
	inImage = new unsigned char[mLength * mHeight];   // 入力画像のメモリ確保

	lpInfo = (LPBITMAPINFOHEADER)malloc(sizeof(BITMAPINFOHEADER));  // メモリ確保
	lpInfo->biSize = sizeof(BITMAPINFOHEADER);   // これは決まり文句
	lpInfo->biWidth = mWidth;    // 画像の幅
	lpInfo->biHeight = mHeight;  // 画像の高さ
	lpInfo->biPlanes = 1;          // 1らしい
	lpInfo->biBitCount = 24;       // 1ドットを表すためのビット数
	lpInfo->biCompression = 0;     // 圧縮はなし

	HDC hDC = ::GetDC(m_hWnd);         // 画面のデバイスコンテキストを取得
	GetDIBits(
		hDC,                       // デバイスコンテキスト（参照）
		m_hBitmap,                 // HBITMAP型、ビットマップ（入力）
		0,                         // データ取得を開始する行（参照）
		mHeight,                 // データを取得する行数（参照）
		inImage,                  // void*型、バッファ
		(LPBITMAPINFO)lpInfo,      // 出力形式の指定（参照）
		DIB_RGB_COLORS             // 今は特に意味ない
		);

	::ReleaseDC(m_hWnd,hDC);

}

void CImageOpenDlg::setupOutImage(){

	if(!m_image || !inImage) return;

	if(m_image2) m_image2.Destroy();

	if(shouldResetImageSize){
		if(outImage)
			delete[] outImage;
		outImage = new unsigned char[mLength * mHeight];   // 出力画像のメモリ確保
		shouldResetImageSize = false;
	}

	for(int j=0 ; j<mHeight ; j++){
		for(int i=0 ; i<mWidth ; i++){
			outImage[index(i,j) + 0] = inImage[index(mWidth-1-i,j) + 0];  // Blue
			outImage[index(i,j) + 1] = inImage[index(mWidth-1-i,j) + 1];  // Green
			outImage[index(i,j) + 2] = inImage[index(mWidth-1-i,j) + 2];  // Red
	
		}
	}

	m_hBitmap = (HBITMAP)::CopyImage((HBITMAP)m_image,IMAGE_BITMAP,
		m_image.GetWidth(),m_image.GetHeight(),NULL/*LR_CREATEDIBSECTION*/);

	HDC hDC = ::GetDC(m_hWnd);         // 画面のデバイスコンテキストを取得
	SetDIBits(
		hDC,                       // デバイスコンテキスト（参照）
		m_hBitmap,                 // HBITMAP型、ビットマップ（出力）
		0,                         // データ上書きを開始する行（参照）
		mHeight,                 // データを上書きする行数（参照）
		outImage,                  // void*型、バッファ
		(LPBITMAPINFO)lpInfo,      // 入力形式の指定（参照）
		DIB_RGB_COLORS             // 今は特に意味ない
		);

	m_image2.Attach(m_hBitmap);  // HBITMAP で m_image2 を構築する

	::ReleaseDC(m_hWnd,hDC);

}
