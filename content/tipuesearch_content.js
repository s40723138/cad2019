var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'TASKS', 'text': '簡單的任務回報 \n', 'tags': '', 'url': 'TASKS.html'}, {'title': 'IPv6_ssh', 'text': '1.先使用命令方塊輸入sh \n 2.再輸入 ssh-keygen -t rsa -b 4096 -C "(鑰匙名稱)" 來產生鑰匙 \n 3.開啟puttygen將剛剛所產生的private key轉為PPK檔 \n 4.在start.bat中加入下方程式,設定路徑使start.bat連結plink.exe \n REM \xa0 for \xa0 putty \n set \xa0 GIT_HOME = % Disk % :\\portablegit\\ bin \\ \n set \xa0 GIT_SSH = % Disk % :\\putty\\plink.exe \n \n \n 5.將.git/config中的URL改為SSH所用 \n url= git@github.com:(username)/(repository).git \n \n \n 6.使用 putty.exe設定proxy改成HTTP並將SSH的Auth將剛剛所轉好的private key載入 \n 7.到github倉儲sitting中SSH新增剛剛的public key \n', 'tags': '', 'url': 'IPv6_ssh.html'}, {'title': 'Solvespace編譯', 'text': '先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n (將子模組中的資料全部取下放在solvespace的資料夾中) \n 上述步驟同: \n \xa0 \xa0 \xa0git clone\xa0 https://github.com/solvespace/solvespace.git \xa0 \n \xa0 \xa0 \xa0cd solvespace \n \xa0 \xa0 \xa0git submodule init \n \xa0 \xa0 \xa0git submodule update \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n (原本會尋找713和714行但因為無法編譯所以將其註解掉) \n (在windows中的動態資料庫裡就有了，若有需要再給它即可) \n 接著需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 (即隨身系統的 msys64\\mingw64\\lib 目錄) \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n 將libpng.dll.a重新命名為libpng_static.a並且複製到\xa0 Y:\\msys64\\mingw64\\lib \n 完成後若solvespace.exe可順利打開即成功 \n 影片: \n \n \n \n \n https://youtu.be/lARndg95N6c \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Solvespace編譯.html'}, {'title': 'W17\xa0Exam', 'text': '影片: https://youtu.be/M5Xo2ARTumg \n 分組倉儲: https://s40723145.github.io/cad2019ag2/content/40723138.html \n 遇到問題:組員同時間推送版本,組長需花費較多時間整理衝突,組員會多次推送檔案,使倉儲版本差距增加. \n 第二題:連趕關節觸感為極限開關,變為類似避震器. \n', 'tags': '', 'url': 'W17\xa0Exam.html'}, {'title': 'W18 期末報告', 'text': '影片連結: https://youtu.be/qtiSOyafK4Q', 'tags': '', 'url': 'W18 期末報告.html'}, {'title': 'Typo', 'text': '抓到老師打錯字 \n \n', 'tags': '', 'url': 'Typo.html'}, {'title': 'Problem', 'text': '中後排有幾台電腦拔出隨身碟,檔案會損毀,github與python皆無法使用 \n 目前解決方法:重要檔案拉出,隨身碟格式化,(打掉重練). \n', 'tags': '', 'url': 'Problem.html'}]};