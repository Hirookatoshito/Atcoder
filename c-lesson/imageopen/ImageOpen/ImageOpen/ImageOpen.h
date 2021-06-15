// ImageOpen.h : PROJECT_NAME アプリケーションのメイン ヘッダー ファイルです。
//

#pragma once

#ifndef __AFXWIN_H__
	#error "PCH に対してこのファイルをインクルードする前に 'stdafx.h' をインクルードしてください"
#endif

#include "resource.h"		// メイン シンボル


// CImageOpenApp:
// このクラスの実装については、ImageOpen.cpp を参照してください。
//

class CImageOpenApp : public CWinApp
{
public:
	CImageOpenApp();

// オーバーライド
	public:
	virtual BOOL InitInstance();

// 実装

	DECLARE_MESSAGE_MAP()
};

extern CImageOpenApp theApp;