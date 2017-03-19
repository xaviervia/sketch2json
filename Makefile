gh-pages:
	-git checkout -b gh-pages
	git checkout gh-pages
	git merge master
	cd demo && yarn run dist
	cp demo/dist/* .
	git add . && git commit -m "♻️ 📄"
	git push origin gh-pages
	git checkout master
