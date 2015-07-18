<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Canvas</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<style>
		html,
		body {
			margin: 0;
			overflow: hidden;
			height: 100%;
		}
		.hidden {display: none;}
		/* Scale canvas with resize attribute to full size */
		canvas[resize] {
			width: 100%;
			height: 100%;
			background: #70C7A2 url(/images/bg.gif) repeat;
		}
		.hud .assets {
			position: absolute;
			bottom: 10px;
			right: 10px;
		}
	</style>
</head>
<body>
	<img id="grass" class="hidden" src="/images/grass.png" />
	<img id="house" class="hidden" src="/images/house.gif" />
	<img id="wall" class="hidden" src="/images/wall.gif" />
	<img id="wallEnd" class="hidden" src="/images/wallEnd.gif" />
	<img id="female" class="hidden" src="/images/female.png" />
	<img id="treem" class="hidden" src="/images/treem.png" />
	<img id="pathv" class="hidden" src="/images/path-v.gif" />
	<img id="pathh" class="hidden" src="/images/path-h.gif" />
	
	<!-- house assets -->
	<img id="house_rooftr" class="hidden" src="/images/assets/house/house_rooftr.png" />
	<img id="house_rooftl" class="hidden" src="/images/assets/house/house_rooftl.png" />
	<img id="house_chimny" class="hidden" src="/images/assets/house/house_chimny.png" />
	<img id="house_door" class="hidden" src="/images/assets/house/house_door.png" />

	<div class="hud">
		<button type="button" class="btn btn-default assets" data-toggle="modal" data-target="#assets">Assets</button>
	</div>

	<!-- Modal -->
	<div class="modal fade" id="assets" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title">Assets</h4>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-sm-3 text-center">
							<img src="/images/assets/house/house_rooftr.png" />
						</div>
						<div class="col-sm-3 text-center">
							<img src="/images/assets/house/house_rooftl.png" />
						</div>
						<div class="col-sm-3 text-center">
							<img src="/images/assets/house/house_chimny.png" />
						</div>
						<div class="col-sm-3 text-center">
							<img src="/images/assets/house/house_door.png" />
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>

	<canvas id="canvas" resize="true"></canvas>

	<script src="/js/paper-full.min.js"></script>
	<script src="/js/app.js"></script>
</body>
</html>