# Auto
# make all

# Manual
# npm run build
# tar -cvf build.tar build/

# Build and copy file to build
process:
	npm run build
	sed -i "s/React App/React.js Template/g" build/index.html

# Compress build directory
compress:
	tar -cvf build.tar build/

# Group task
all: process compress