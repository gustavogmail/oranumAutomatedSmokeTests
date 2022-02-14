install:
	@echo "Installing npm dependecies..."
	npm install

build-image:
	@echo "Building the Docker image..."
	docker build -t gustavosaudade/oranumautomation:5.0 .

container-run:
	@echo "Running the Docker container..."
	docker run -t -p 5000:5000 gustavosaudade/oranumautomation:5.0

run-allure:
	@echo "Running BDD Scenarios and generationg Allure reports..."
	npm run test

run-features:
	@echo "Running BDD Scenarios..."
	npx codeceptjs run --features