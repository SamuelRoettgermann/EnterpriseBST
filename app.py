from flask import Flask, render_template
import subprocess

app = Flask(__name__)


@app.get("/")
def benchmark_navigation():
    """Shows the main webpage with the button to get the benchmark resutlts"""
    return render_template("benchmark_page.html")


@app.get("/benchmark_bst_results")
def benchmark_bst_results():
    """Runs the pytest benchmark command for the BST and returns the text output"""
    result = subprocess.run(
        ["pytest", "--benchmark-only", "-k", "bst"], capture_output=True, text=True
    )

    return f"<pre>{result.stdout}</pre>"
