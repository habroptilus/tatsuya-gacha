from flask import Flask, render_template  # 追加

app = Flask(__name__)


@app.route('/')
def hello():
    name = "Hoge"
    # return name
    return render_template('index.html', title='藤原竜也ガチャ', name=name)  # 変更


# おまじない
if __name__ == "__main__":
    app.run(debug=True)
