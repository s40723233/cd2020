var tipuesearch = {"pages": [{'title': 'Home', 'text': 'Week1~5 \n', 'tags': '', 'url': 'Home.html'}, {'title': 'Weeks', 'text': '', 'tags': '', 'url': 'Weeks.html'}, {'title': 'Week1~Week5', 'text': '1.建立GITHUB倉儲，名稱cad2020。 \n 2.打開隨身系統，下載cad2020資料夾，輸入git clone\xa0 https://github.com/s40723233/cad2020 \n 3.輸入cd cad2020 進入資料夾輸入git submodule add \xa0 https://github.com/mdecourse/cmsimde.git \n 4.到資料夾裡把cmsimde裡面的up_dir裡的資料全部複製到cad2020裡面。 \n 5. 之後 再進入cmsimde，輸入python -m pip install ask_cors。 \n 6.完成後輸入python wsgi.py 就可以編輯倉儲了 \n \n Updated Python 下載3.8.2版本的安裝檔。 \n 開啟，點選定制安裝 \n 將選項的pip取消勾選 \n 將路徑改為任意槽的py382資料夾 \n 用編輯器開啟start_mdecourse.bat檔案。 \n 將檔案中的py373全部都改成py382 \n \n 安裝Flask、lxml、 Markdown 、bs4、 pelican 、ask_cors、leo。 \n \n 第三組第一次小組會議: \n 開會紀錄PDF: https://drive.google.com/openid=1R3UElFfUhid4D7hocedXO69w5lPEYi1M \n 會議內容:討論工作內容 \n 作業1: \n 1.請描述如何針對該課程進行有效的隨機分組，或者隨機進行點名？ 2.描述如何為Windows 10 64位系統準備一個可移植的Python編程系統，以允許在Github上維護CMSiMDE網站，Pelican博客和js演示文稿？ 3.您需要從 http://www.coppeliarobotics.com/helpFiles/index.html 了解什麼來實現四輪機器人？ \n 工作分配圖 \n \n \n \n Week3 \n 翻譯 http://www.coppeliarobotics.com/helpFiles/index.htm 部分內容 \n 下載PDF連結: \n https://drive.google.com/open?id=1QQAyqm9VjunnozFMYdrV4K7ktpkjgVOu \n \n \n', 'tags': '', 'url': 'Week1~Week5.html'}, {'title': 'Week6~Week10', 'text': 'Week6 \n 第三組第二 次直播會議 \n 開會紀錄PDF連結: https://drive.google.com/open?id=1afrCAJJtArv94qnTK2zOsPor7WmpeaPH \n \n 作業二: \n \n 根據主題 0 和主題 1 的素材，您能否具體描述機械設計團隊為了完成作業 1 的四輪機器人需要做些什麼 ? \n 您需要從 https://cyberbotics.com/doc/guide/index 了解什麼來實現四輪機器人？ \n \n \n 工作分配表: \n \n \xa0Week7 \n \n', 'tags': '', 'url': 'Week6~Week10.html'}, {'title': 'Week11~Week15', 'text': '', 'tags': '', 'url': 'Week11~Week15.html'}, {'title': 'Week16~Week20', 'text': '', 'tags': '', 'url': 'Week16~Week20.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};