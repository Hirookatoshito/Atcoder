// ImageOpenDlg.h : ヘッダー ファイル
//

#pragma once

#include "afxwin.h"
#include <afxstr.h>
#include <atlimage.h>

// CImageOpenDlg ダイアログ
class CImageOpenDlg : public CDialog
{
// コンストラクション
public:
	CImageOpenDlg(CWnd* pParent = NULL);	// 標準コンストラクタ

// ダイアログ データ
	enum { IDD = IDD_IMAGEOPEN_DIALOG };

	protected:
	virtual void DoDataExchange(CDataExchange* pDX);	// DDX/DDV サポート


// 実装
protected:
	HICON m_hIcon;

	// 生成された、メッセージ割り当て関数
	virtual BOOL OnInitDialog();
	afx_msg void OnSysCommand(UINT nID, LPARAM lParam);
	afx_msg void OnPaint();
	afx_msg HCURSOR OnQueryDragIcon();
	DECLARE_MESSAGE_MAP()

	CImage m_image;
	CImage m_image2;
	LPBITMAPINFOHEADER lpInfo;
	HBITMAP m_hBitmap;


	unsigned char *inImage, *outImage;       // バッファを宣言
	int mWidth;
	int mHeight;
	int mLength;

	bool shouldResetImageSize;

	int index(int i, int j){
		return( j*mLength + 3*i );
	}
	
	void setupInImage();
	void setupOutImage();

public:
	CStatic m_pict;
	afx_msg void OnBnClickedOk();


	afx_msg void OnSize(UINT nType, int cx, int cy);
	CButton m_button_OK;
	CButton m_button_Cancel;
};
