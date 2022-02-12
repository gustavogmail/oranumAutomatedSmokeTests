build-image:
	@echo "Building the Docker image..."
	docker build -t gustavosaudade/oranumautomation:1.0 .

container-run:
	@echo "Running the Docker container..."
	docker run gustavosaudade/oranumautomation:1.0