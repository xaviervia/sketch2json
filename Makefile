gh-pages:
	-git checkout -b gh-pages
	git checkout gh-pages
	git reset --hard master
	cd demo && yarn build
	cp demo/dist/* .
	git add . && git commit -m "♻️ 📄"
	git push origin gh-pages
	git checkout master
