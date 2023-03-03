#!/bin/bash

git clone https://github.com/MajaJovanovic3/BooksTask.git  # Kloniramo sa gita

cd tasks # Promena direktorijuma

git checkout -b __test__ # Kreiranje nove grane i promena na nju

echo "Sadržaj fajla" > file. # Kreiranje fajla sa sadržajem

git add file.txt # Dodavanje fajla na staging

git status # Logovanje outputa "git status" komande u konzoli