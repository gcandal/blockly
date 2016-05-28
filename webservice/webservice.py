import subprocess
import os
import flask_cors
from flask import Flask, request

app = Flask(__name__)


def get_biggest_nr():
    files = [int(file.split(".cs", 2)[0]) for file in os.listdir(".") if file.endswith(".cs")]
    return sorted(files)[-1] if len(files) > 0 else 0


def create_source_file(file_nr, code):
    path = "%s.cs" % file_nr
    with open(path, mode="x") as file:
        file.write(code)


def compile_source(file_nr):
    to_path = "%s.exe" % file_nr
    from_path = "%s.cs" % file_nr
    subprocess.check_output(["C:/Windows/Microsoft.NET/Framework/v4.0.30319/csc.exe",
                             "/r:Infer.Compiler.dll",
                             "/r:Infer.Runtime.dll",
                             "/t:exe",
                             "/out:%s" % to_path,
                             from_path])


@app.route("/run", methods=["POST"])
def run():
    code = request.get_data().decode("utf-8")
    next_nr = get_biggest_nr() + 1
    to_path = "%s.exe" % next_nr
    create_source_file(next_nr, code)

    try:
        compile_source(next_nr)
    except subprocess.CalledProcessError as e:
        return e.output, 500

    try:
        run_output = subprocess.check_output([to_path])
    except subprocess.CalledProcessError as e:
        return e.output, 500

    return run_output


if __name__ == "__main__":
    cors = flask_cors.CORS(app)
    app.run(debug=True)
