FROM alpine

# --------- Aishik
RUN apk add --update --no-cache python3
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
RUN pip3 install flask

WORKDIR /usr/app

COPY ./ ./

CMD ["python", "server.py"]