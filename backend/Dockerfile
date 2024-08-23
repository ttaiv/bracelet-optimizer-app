FROM python:3.10-slim

WORKDIR /server

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["flask", "--app", "bracelet-opt-server", "run", "--host=0.0.0.0", "--debug"]
