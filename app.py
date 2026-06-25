from flask import Flask, render_template
import subprocess

app = Flask(__name__)


@app.get("/benchmark_test")
def benchmark_test():
    return render_template("benchmark_page.html")


@app.get("/benchmark_test_result")
def benchmar_test_result():
    result = subprocess.run(
        ["pytest", "--benchmark-only", "-k", "bst"], capture_output=True, text=True
    )

    return f"{result.stdout}"
