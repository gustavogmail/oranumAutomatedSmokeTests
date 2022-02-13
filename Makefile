install:
	@echo "Installing npm dependecies..."
	npm install

build-image:
	@echo "Building the Docker image..."
	docker build -t gustavosaudade/oranumautomation:1.0 .

container-run:
	@echo "Running the Docker container..."
	docker run -d -t -p 5000:8080 gustavosaudade/oranumautomation:1.0