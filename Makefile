install:
	@echo "Installing npm dependecies..."
	npm install

run-features:
	@echo "Running BDD Scenarios..."
	npx codeceptjs run --features

build-image:
	@echo "Building the Docker image..."
	docker build -t gustavosaudade/oranumautomation:3.0 .

container-run:
	@echo "Running the Docker container..."
	docker run -t -p 5000:8080 gustavosaudade/oranumautomation:3.0