<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Canvas</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<style>
		html,
		body {
			margin: 0;
			overflow: hidden;
			height: 100%;
		}

		/* Scale canvas with resize attribute to full size */
		canvas[resize] {
			width: 100%;
			height: 100%;
		}
	</style>
</head>
<body>
	<canvas id="canvas" resize="true"></canvas>
	<script src="/js/paper-full.min.js"></script>
	<script src="/js/app.js"></script>
</body>
</html>