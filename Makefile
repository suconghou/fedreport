build:
	make release && \
	closurecompiler.sh --language_out ECMASCRIPT_2015 --js_output_file=fedreport.min.js bundle.js
dev:
	cd src && \
	rollup index.js -o ../bundle.js --output.name fereport -f umd -e net,fs,os,process,path,child_process,util,http,querystring,buffer -w

release:
	cd src && \
	rollup index.js -o ../bundle.js --output.name fereport -f umd -e net,fs,os,process,path,child_process,util,http,querystring,buffer && \
	chmod +x ../bundle.js
	
