var tipuesearch = {"pages": [{'title': 'Home', 'text': 'Week1~5 \n', 'tags': '', 'url': 'Home.html'}, {'title': 'Week', 'text': '', 'tags': '', 'url': 'Week.html'}, {'title': 'Week1~Week5', 'text': '1.建立GITHUB倉儲，名稱cad2020。 \n 2.打開隨身系統，下載cad2020資料夾，輸入git clone\xa0 https://github.com/s40723233/cad2020 \n 3.輸入cd cad2020 進入資料夾輸入git submodule add \xa0 https://github.com/mdecourse/cmsimde.git \n 4.到資料夾裡把cmsimde裡面的up_dir裡的資料全部複製到cad2020裡面。 \n 5. 之後 再進入cmsimde，輸入python -m pip install ask_cors。 \n 6.完成後輸入python wsgi.py 就可以編輯倉儲了 \n \n Updated Python 下載3.8.2版本的安裝檔。 \n 開啟，點選定制安裝.. \n 將選項的pip取消勾選 \n 將路徑改為任意槽的py382資料夾 \n 用編輯器開啟start_mdecourse.bat檔案。 \n 將檔案中的py373全部都改成py382 \n \n 安裝Flask、lxml、 Markdown 、bs4、 pelican 、ask_cors、leo。 \n start.bat: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n \n \n \n @echo \xa0 off \n set \xa0 Disk = y \n subst \xa0 % Disk % : \xa0 "data" \n \xa0 \xa0 \n % Disk % : \n \xa0 \xa0 \n set \xa0 HomePath = % Disk % :\\home \n set \xa0 HomeDrive = % Disk % :\\home \n set \xa0 Home = % Disk % :\\home \n set \xa0 USERPROFILE = % Disk % :\\home \n \xa0 \xa0 \n REM 將系統 Python 程式的 io 設為 utf - 8 \n set \xa0 PYTHONIOENCODING = "utf-8" \n \xa0 \xa0 \n #REM for putty \n #Set GIT_HOME=%CDisk%:\\portablegit\\bin\\ \n #Set GIT_SSH=%Disk%:\\putty\\plink.exe \n \xa0 \xa0 \n set \xa0 PYTHONPATH = % Disk % :\\py382\\DLLs; % Disk % :\\py382\\Lib; % Disk % :\\py382\\Lib\\site - packages; \n set \xa0 PYTHONHOME = % Disk % :\\py382 \n \xa0 \xa0 \n set \xa0 path_python = % Disk % :\\py382; % Disk % :\\py382\\Scripts; \n set \xa0 path_msys2 = % Disk % :\\msys64\\mingw64\\ bin ; \n set \xa0 path_git = % Disk % :\\portablegit\\ bin ; \n set \xa0 path_tcc = % Disk % :\\tcc; \n \xa0 \xa0 \n path = % Disk % :; % path_python % ; % path_msys2 % ; % path_git % ; % path_tcc % ; \n \xa0 \xa0 \n start \xa0 / MIN \xa0 cmd.exe \n start \xa0 / MIN \xa0 cmd.exe \n start \xa0 / MIN \xa0 cmd.exe \n start \xa0 / MIN \xa0 cmd.exe \n \xa0 \xa0 \n start \xa0 / MIN \xa0 % Disk % :\\wscite432\\wscite\\SciTE.exe \n start \xa0 / MIN \xa0 % Disk % :\\wscite432\\wscite\\SciTE.exe \n \xa0 \xa0 \n Exit \n \n \n \n \n \n \n \n stop.bat: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n \n \n \n @echo \xa0 off \n set \xa0 Disk = y \n path = % PATH % ; \n \xa0 \xa0 \n taskkill \xa0 / IM python.exe \xa0 / F \n taskkill \xa0 / IM pythonw.exe \xa0 / F \n taskkill \xa0 / IM scite.exe \xa0 / F \n \xa0 \xa0 \n REM 終止虛擬硬碟與目錄的對應 \n subst \xa0 % Disk % : \xa0 / D \n REM 關閉 cmd 指令視窗 \n taskkill \xa0 / IM cmd.exe \xa0 / F \n \xa0 \xa0 \n EXIT \n \n \n \n \n \n \n \n \n 第三組第一次小組會議: \n 開會紀錄PDF: https://drive.google.com/openid=1R3UElFfUhid4D7hocedXO69w5lPEYi1M \n 會議內容:討論工作內容 \n 作業1: \n 1.請描述如何針對該課程進行有效的隨機分組，或者隨機進行點名？ 2.描述如何為Windows 10 64位系統準備一個可移植的Python編程系統，以允許在Github上維護CMSiMDE網站，Pelican博客和js演示文稿？ 3.您需要從 http://www.coppeliarobotics.com/helpFiles/index.html 了解什麼來實現四輪機器人？ \n 工作分配圖 \n \n \n \n Week3 \n 翻譯 http://www.coppeliarobotics.com/helpFiles/index.htm 部分內容 \n 下載PDF連結: \n https://drive.google.com/open?id=1QQAyqm9VjunnozFMYdrV4K7ktpkjgVOu \n \n \n', 'tags': '', 'url': 'Week1~Week5.html'}, {'title': 'Week6~Week9', 'text': 'Week6 \n 第三組第二 次直播會議 \n 開會紀錄PDF連結: https://drive.google.com/open?id=1afrCAJJtArv94qnTK2zOsPor7WmpeaPH \n \n 作業二: \n \n 根據主題 0 和主題 1 的素材，您能否具體描述機械設計團隊為了完成作業 1 的四輪機器人需要做些什麼 ? \n 您需要從 https://cyberbotics.com/doc/guide/index 了解什麼來實現四輪機器人？ \n \n \n 工作分配表: \n \n \n', 'tags': '', 'url': 'Week6~Week9.html'}, {'title': 'Week10~Week14', 'text': '第三次直播會議. \n 開會紀錄PDF連結: https://drive.google.com/open?id=1AP49O_JYqgqQNDzEz7Pxj-tzjugL8Bb2 \n \n 作業三 : 根據對 Topic2 和 Topic3 的閱讀，使用 CoppeliaSim 、 Webots 、 Onshap e 提出一個機電一體化項目。 \n 工作分配表: \n \n \n git clone cd2020pj1 倉儲 。 進入 Google API 。 建立專案。 啟用API和Google+ Domains API。 將ID及密碼複製，命名為oauth_s學號.txt 並存儲 接著設定來源及URL，點選新增URL \n https://localhost:8443及授權的重新定向URL輸入https://localhost:8443/login/google/，接著存儲。 開啟leo \n 打開cd2020pj1.leo。 接著輸入pip install authomatic。 進入pj1，打開wsgi.py，即完成。 \n', 'tags': '', 'url': 'Week10~Week14.html'}, {'title': 'Week15~Week19', 'text': '', 'tags': '', 'url': 'Week15~Week19.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};