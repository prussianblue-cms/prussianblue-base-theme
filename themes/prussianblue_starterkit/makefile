info:
	echo "This makefile contains commands to compile the theme assets"
	echo "Available targets:"
	echo " - sass"

sass-components:
	# Find the sass files for components and compile them
	find . -type d -wholename "*/components/*" -exec sass {} +

sass-components-watch:
	# Similar to sass but keep watching
	find . -type d -wholename "*/components/*" -exec sass --watch {} +
