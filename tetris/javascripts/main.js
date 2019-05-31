//配列の見た目を表示する
var array = [
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9], //最上層のエリア判定
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]//最下層のエリア判定
];
//配列の判定を格納する
var move = [
    //左右の判定はエリア端を表す
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9], //最上層のエリア判定
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]//最下層のエリア判定
]

var holdMove = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

var nextMove = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

//moveFlag = 0　操作ブロックが無い
var moveFlag = 0;

//keyFlag = 0 操作できる
var keyFlag = 0;

//gameOver = 1 gameOverになる
var gameOver = 0;

// 揃ったライン数を記録する
var line = 0;

// 時間をカウントする
var timeCounter = 0;

//最初にテトリミノを三つ作成する
var BlockNo = [];
for (var i = 0; i < 3; i++) {
    BlockNo[i] = Math.ceil(Math.random() * 7);
}


//元の色のarrayの配列を保存する
var oldArray = [0, 0, 0, 0];
//何回繰り返したか保存する
var count = [0, 0, 0, 0];
//一列を消去して、新しい配列を先頭に追加する
var dltBlockLine = [0, 0, 0, 0];
//masterFlag = 1 全ての操作を停止する
var masterFlag = 0;
//ライン数によって加算するポイントを計算する
var point = 0;
//難易度を上げる
var difficulty = 0;
//ブロックがIの字かどうか
var blockI = 0;

// 消去
function deleteS() {
    //元の色のarrayの配列を保存する
    oldArray = [0, 0, 0, 0];
    //何回繰り返したか保存する
    count = [0, 0, 0, 0];
    //一列を消去して、新しい配列を先頭に追加する
    dltBlockLine = [0, 0, 0, 0];
    //ライン数によって加算するポイントを計算する
    point = 0;
    for (var i = 19; i > 1; i--) {
        if (!move[i].includes(0) && !move[i].includes(1)) {
            masterFlag = 1;
            deleteEffect(i);
            deleteBlock(i);
            setTimeout(function () {
                display();
                masterFlag = 0;
            }, 1200);
            point += 1;
            difficulty += 1;
            //10ラインごとにスピードアップして難易度を上げる
            if ((difficulty % 10) == 0 && difficulty <= 90) {
                setTimeout(function () {
                    clearInterval(sturt);
                    level(difficulty / 10);
                    sturt = setInterval(function () {
                        if (masterFlag == 0) {
                            deleteS();
                            fall();
                            genBlock();
                            checkFlag();
                            display();
                            gameEnd();
                        }
                    }, 400 - difficulty * 3);
                }, 1200)
            }
        }
    }
    score(point);
}

//setIntervalでチカチカ消えるエフェクトを付ける
function deleteEffect(i) {
    //四つけしまで対応する
    if (oldArray[0] == 0) {
        oldArray[0] = array[i];
        count[0] = 0;
    } else if (oldArray[1] == 0) {
        oldArray[1] = array[i];
        count[1] = 0;
    } else if (oldArray[2] == 0) {
        oldArray[2] = array[i];
        count[2] = 0;
    } else {
        oldArray[3] = array[i];
        count[3] = 0;
    }
    //  エフェクトを出す
    if (!oldArray[0].includes(0) && oldArray[1] == 0) {
        effect1 = setInterval(function () {
            if (array[i] == oldArray[0]) {
                array[i] = [9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9];
            } else {
                array[i] = oldArray[0];
            }
            display();
            if (count[0] == 3) {
                clearInterval(effect1);
            } else {
                count[0] += 1;
            }
        }, 200);
    }

    else if (!oldArray[1].includes(0) && oldArray[2] == 0) {
        effect2 = setInterval(function () {
            if (array[i] == oldArray[1]) {
                array[i] = [9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9];
            } else {
                array[i] = oldArray[1];
            }
            display();
            if (count[1] == 3) {
                clearInterval(effect2);
            } else {
                count[1] += 1;
            }
        }, 200);
    }


    else if (!oldArray[2].includes(0) && oldArray[3] == 0) {
        effect3 = setInterval(function () {
            if (array[i] == oldArray[2]) {
                array[i] = [9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9];
            } else {
                array[i] = oldArray[2];
            }
            display();
            if (count[2] == 3) {
                clearInterval(effect3);
            } else {
                count[2] += 1;
            }
        }, 200);
    }

    else {
        effect4 = setInterval(function () {
            if (array[i] == oldArray[3]) {
                array[i] = [9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9];
            } else {
                array[i] = oldArray[3];
            }
            display();
            if (count[3] == 3) {
                clearInterval(effect4);
            } else {
                count[3] += 1;
            }
        }, 200);
    }
}

function deleteBlock(line) {
    //四つ消しまで対応する
    if (dltBlockLine[0] == 0) {
        dltBlockLine[0] = line;
    } else if (dltBlockLine[1] == 0) {
        dltBlockLine[1] = line + 1;
    } else if (dltBlockLine[2] == 0) {
        dltBlockLine[2] = line + 2;
    } else {
        dltBlockLine[3] = line + 3;
    }

    //四つまで消せる
    if (dltBlockLine[0] > 0 && dltBlockLine[1] == 0) {
        setTimeout(function () {
            array.splice(dltBlockLine[0], 1);
            array.unshift([9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9]);
            move.splice(dltBlockLine[0], 1);
            move.unshift([9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9]);
        }, 850);
    }
    else if (dltBlockLine[1] > 0 && dltBlockLine[2] == 0) {
        setTimeout(function () {
            array.splice(dltBlockLine[1], 1);
            array.unshift([9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9]);
            move.splice(dltBlockLine[1], 1);
            move.unshift([9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9]);
        }, 852);
    }
    else if (dltBlockLine[2] > 0 && dltBlockLine[3] == 0) {
        setTimeout(function () {
            array.splice(dltBlockLine[2], 1);
            array.unshift([9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9]);
            move.splice(dltBlockLine[2], 1);
            move.unshift([9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9]);
        }, 854);
    }
    else {
        setTimeout(function () {
            array.splice(dltBlockLine[3], 1);
            array.unshift([9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9]);
            move.splice(dltBlockLine[3], 1);
            move.unshift([9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9]);
        }, 856);
    }
}


//消したライン数を表示する
// function score() {
//     line += 1;
//     document.getElementById('score').innerHTML = line;
// }
function score(point) {
    if (point == 4) {
        line += 1200
    }
    else if (point == 3) {
        line += 300
    }
    else if (point == 2) {
        line += 100
    }
    else if (point == 1) {
        line += 30;
    }
    document.getElementById('score').innerHTML = line;
}

//現在のlevel（難易度）を表示
function level(level) {
    if (level == 9) {
        document.getElementById("level").innerHTML = "MAX";
    } else {
        document.getElementById("level").innerHTML = level + 1;
    }
}

// 落下
function fall() {
    //落下中はキー操作を受け付けない
    keyFlag = 1;
    //落下中（move[i][j] == 1)のブロックの下が9か2だったら落下し終わったことを確定する
    for (var i = 1; i < 19; i++) {
        for (var j = 1; j < 11; j++) {
            if (move[i][j] == 1 && (move[i + 1][j] == 2 || move[i][j] == 9)) {
                resetMove();
                ;
            }
        }
    }

    var under = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; //配列の下から始まり、下のブロックの状態を記憶する配列
    for (var i = 19; i >= 1; i--) {
        for (var j = 1; j < 11; j++) {
            if (under[j] == 0) { //下にブロックがない
                if (move[i][j] == 0) { //下に何もないし動かすものがブロックじゃない
                    under[j] = 0; //ブロックではない
                } else if (move[i][j] == 1) { //下にブロックがないかつ動かすものがブロック
                    array[i + 1][j] = array[i][j];
                    array[i][j] = 0;
                    move[i][j] = 0;
                    move[i + 1][j] = 1;
                    under[j] = 0;
                }
            } else {
                if (move[i][j] == 0) {
                    under[j] = 0;
                } else {
                    if (move[i][j] == 1) {
                        resetMove();
                    }
                    under[j] = 1;
                }
            }
        }
    }
    keyFlag = 0;
}

// ブロック判定(move)を全て デフォルト値の0 または 動かせないブロックを意味する2 に変更
function resetMove() {
    holdFlag = 0;
    console.log("reset" + holdFlag)
    for (var i = 1; i < 20; i++) {
        for (var j = 1; j < 11; j++) {
            if (move[i][j] == 1 || move[i][j] == 2) {
                move[i][j] = 2;
            } else if (move[i][j] == 1) {
                move[i][j] = 1;
            } else {
                move[i][j] = 0;
            }
        }
    }
}

//キーボードの処理
document.onkeydown = function (e) {
    if (keyFlag = 0) {
        return;
    }
    switch (e.code) {
        // Zキーを押したら回転
        case "KeyZ":
            spinR();
            break;
        // Xキーを押したら左回転
        case "KeyX":
            spinL();
            break;
        //上矢印キーを押したらハードドロップ
        case "ArrowUp":
            moveBlockHerd();
        //右矢印キーを押したら右へ
        case "ArrowRight":
            moveBlockRight();
            break;
        //左矢印キーを押したら左へ
        case "ArrowLeft":
            moveBlockLeft();
            break;
        //下矢印キーを押したら下へ
        case "ArrowDown":
            moveBlockFall();
            break;
        //spaceでホールド
        case "Space":
            console.log("space");
            hold();
            break;
    }
    display();
}


//回転
function spinR() {
    moveS = [0, 0, 0, 0];
    arrayS = [0, 0, 0, 0];
    moveIndex = 0;
    for (var i = 19; i > 2; i--) {
        if (move[i].includes(1)) {
            arrayS[0] = array[i - 3];
            arrayS[1] = array[i - 2];
            arrayS[2] = array[i - 1];
            arrayS[3] = array[i];

            moveS[0] = move[i - 3];
            moveS[1] = move[i - 2];
            moveS[2] = move[i - 1];
            moveS[3] = move[i];
            moveIndex = i - 3;
            break;
        }
    }

    for (var i = 0; i < 4; i++) {
        if (moveS[i].includes(1)) {
            break;
        }
        if (i == 3) {
            return;
        }
    }

    blockIndexMin = moveS[0].indexOf(1);
    for (var i = 1; i < 4; i++) {
        blockIndex = moveS[i].indexOf(1);
        if (blockIndexMin > blockIndex && blockIndex != -1) {
            blockIndexMin = blockIndex;
        } else if (blockIndexMin == -1) {
            blockIndexMin = blockIndex;
        }
    }

    var newArray = [];
    var newMove = [];
    for (var i = 0; i < 4; i++) {
        newArray[i] = [];
        newMove[i] = [];
        for (var j = 0; j < 4; j++) {
            newArray[i][j] = arrayS[3 - j][i + blockIndexMin];
            newMove[i][j] = moveS[3 - j][i + blockIndexMin];
        }
    }

    for (var i = 0; i < 4; i++) {
        if (newMove[i].includes(undefined)) {
            newArray[i] = [0, 0, 0, 0]
            newMove[i] = [0, 0, 0, 0];
            blockIndexMin -= 1;
        }
    }


    while (newMove[0][0] == 0 || newMove[1][0] == 0 || newMove[2][0] == 0 || newMove[3][0] == 0) {
        if (newMove[0][0] == 1 || newMove[1][0] == 1 || newMove[2][0] == 1 || newMove[3][0] == 1) {
            break;
        }
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                newArray[i][j] = newArray[i][j + 1];
                newArray[i][j + 1] = 0;
                newMove[i][j] = newMove[i][j + 1];
                newMove[i][j + 1] = 0;
            }
        }
    }
    while (true) {
        if (newMove[3].includes(1)) {
            break;
        }
        for (var i = 3; i > 0; i--) {
            for (var j = 0; j < 4; j++) {
                newArray[i][j] = newArray[i - 1][j];
                newArray[i - 1][j] = 0;
                newMove[i][j] = newMove[i - 1][j];
                newMove[i - 1][j] = 0;
            }
        }
    }

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (newMove[i][j] == 0) {
                continue;
            }
            if (newMove[i][j] == 1 && (move[moveIndex + i][blockIndexMin + j] == 9 || move[moveIndex + i][blockIndexMin + j] == 2)) {
                return;
            }
        }
    }
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (newMove[i][j] == 1) {
                array[moveIndex + i][blockIndexMin + j] = newArray[i][j];
                move[moveIndex + i][blockIndexMin + j] = newMove[i][j];
            } else if (move[moveIndex + i][blockIndexMin + j] == 1) {
                array[moveIndex + i][blockIndexMin + j] = 0;
                move[moveIndex + i][blockIndexMin + j] = 0;
            }
        }
    }
}

function spinL() {
    moveS = [0, 0, 0, 0];
    arrayS = [0, 0, 0, 0];
    moveIndex = 0;
    for (var i = 19; i > 2; i--) {
        if (move[i].includes(1)) {
            arrayS[0] = array[i - 3];
            arrayS[1] = array[i - 2];
            arrayS[2] = array[i - 1];
            arrayS[3] = array[i];

            moveS[0] = move[i - 3];
            moveS[1] = move[i - 2];
            moveS[2] = move[i - 1];
            moveS[3] = move[i];
            moveIndex = i - 3;
            break;
        }
    }
    for (var i = 0; i < 4; i++) {
        if (moveS[i].includes(1)) {
            break;
        }
        if (i == 3) {
            return;
        }
    }

    //blockI はIの字であればIを入れる
    blockI = 0;

    blockIndexMin = moveS[0].indexOf(1);
    for (var i = 1; i < 4; i++) {
        blockIndex = moveS[i].indexOf(1);
        if (blockIndexMin > blockIndex && blockIndex != -1) {
            blockIndexMin = blockIndex;
        } else if (blockIndexMin == -1) {
            blockIndexMin = blockIndex;
        }
    }

    var newArray = [];
    var newMove = [];
    for (var i = 0; i < 4; i++) {
        newArray[i] = [];
        newMove[i] = [];
        for (var j = 0; j < 4; j++) {
            newArray[i][j] = arrayS[j][3 - i + blockIndexMin];
            newMove[i][j] = moveS[j][3 - i + blockIndexMin];
        }
    }



    //もし壁の外側を取得していたら
    for (var i = 0; i < 4; i++) {
        if (newMove[i].includes(undefined)) {
            newArray[i] = [0, 0, 0, 0]
            newMove[i] = [0, 0, 0, 0];
            blockIndexMin -= 1;
        }
    }

    //もし壁を取得しているIだったら newMove[3]が1のみ　かつ　newMove[2]が9のみ
    if (!newMove[3].includes(0) && !newMove[3].includes(2) && !newMove[3].includes(9) && !newMove[2].includes(0) && !newMove[2].includes(1) && !newMove[2].includes(2)) {
        newMove[2] = [0, 0, 0, 0];
        blockIndexMin -= 1;
    }

    while (newMove[0][0] == 0 || newMove[1][0] == 0 || newMove[2][0] == 0 || newMove[3][0] == 0) {
        if (newMove[0][0] == 1 || newMove[1][0] == 1 || newMove[2][0] == 1 || newMove[3][0] == 1) {
            break;
        }
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                newArray[i][j] = newArray[i][j + 1];
                newArray[i][j + 1] = 0;
                newMove[i][j] = newMove[i][j + 1];
                newMove[i][j + 1] = 0;
            }
        }
    }
    while (true) {
        if (newMove[3].includes(1)) {
            break;
        }
        for (var i = 3; i > 0; i--) {
            for (var j = 0; j < 4; j++) {
                newArray[i][j] = newArray[i - 1][j];
                newArray[i - 1][j] = 0;
                newMove[i][j] = newMove[i - 1][j];
                newMove[i - 1][j] = 0;
            }
        }
    }

    // 四角だったら回さない
    if (newMove[2][0] == 1 && newMove[2][1] == 1 && newMove[3][0] == 1 && newMove[3][1] == 1) {
        return;
    }

    //Iの字(横)だったらblockIndexMinを三つ左にずらす
    for (var i = 0; i < 4; i++) {
        if (newMove[3][i] != 1) {
            break;
        }
        if (i == 3) {
            blockIndexMin -= 3;
        }
    }
    //Iの字（縦）だったらblockIndexMinを三つ右にずらす
    for (var i = 0; i < 4; i++) {
        if (newMove[i][0] != 1) {
            break;
        }
        if (i == 3) {
            blockIndexMin += 3;
            blockI = 1;
        }
    }
    //当てはめれるか
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (newMove[i][j] == 0) {
                continue;
            }
            if (newMove[i][j] == 1 && (move[moveIndex + i][blockIndexMin + j] == 9 || move[moveIndex + i][blockIndexMin + j] == 2)) {
                return;
            }
        }
    }
    // Iの字のテトリミノなら、先に1の値を消しておく
    if (blockI == 1) {
        for (var i = moveIndex; i < 4 + moveIndex; i++) {
            for (var j = 1; j < 11; j++) {
                if (move[i][j] == 1) {
                    array[i][j] = 0;
                    move[i][j] = 0;
                }
            }
        }
    }

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (newMove[i][j] == 1) {
                array[moveIndex + i][blockIndexMin + j] = newArray[i][j];
                move[moveIndex + i][blockIndexMin + j] = newMove[i][j];
            } else if (move[moveIndex + i][blockIndexMin + j] == 1) {
                array[moveIndex + i][blockIndexMin + j] = 0;
                move[moveIndex + i][blockIndexMin + j] = 0;
            }
        }
    }
}









//ハードドロップ
function moveBlockHerd() {
    flag = 1;
    while (flag == 1) {
        for (var i = 1; i < 20; i++) {
            if (move[i].includes(1)) {
                flag = 1;
                break;
            } else {
                flag = 0;
            }
        }
        if (flag == 0) {
            break;
        } else {
            fall();
        }
    }
}

// 右
function moveBlockRight() {
    for (var i = 1; i < 20; i++) {
        for (var j = 9; j > 0; j--) {
            if (move[i][j] == 1 && move[i][j + 1] == 0) {
                break;
            } else if (move[i][j] == 0 || move[i][j] == 2) {

            } else {
                return;
            }
        }
    }
    for (var i = 1; i < 20; i++) {
        for (var j = 9; j > 0; j--) {
            if (move[i][j] == 1) {
                array[i][j + 1] = array[i][j];
                array[i][j] = 0;
                move[i][j + 1] = move[i][j]
                move[i][j] = 0;
            }
        }
    }
}
// 左
function moveBlockLeft() {
    for (var i = 1; i < 20; i++) {
        for (var j = 2; j < 11; j++) {
            if (move[i][j] == 1 && move[i][j - 1] == 0) {
                break;
            } else if (move[i][j] == 0 || move[i][j] == 2) {

            } else {
                return;
            }
        }
    }
    for (var i = 1; i < 20; i++) {
        for (var j = 2; j < 11; j++) {
            if (move[i][j] == 1) {
                array[i][j - 1] = array[i][j];
                array[i][j] = 0;
                move[i][j - 1] = move[i][j]
                move[i][j] = 0;
            }
        }
    }
}
//下
function moveBlockFall() {
    fall();
}

//ホールドしているブロックを表す配列
var holdBlockS = [0, 0];
//ホールドした場合、genBlockの処理を飛ばすフラグ
var genFlag = 0;
// ホールドした場合、ブロックが落ちるまでホールドができなくなるためのフラグ
var holdFlag = 0;
// ホールド
function hold() {
    console.log("hold "+holdFlag);
    if (holdFlag == 1) {
        return;
    }
    holdMove = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    if (holdBlockS[0] == 0) {
        holdBlockS[0] = BlockNo[0];
        switch (holdBlockS[0]) {
            case 1:
                holdMove[0][1] = 1;
                holdMove[1][1] = 1;
                holdMove[2][1] = 1;
                holdMove[3][1] = 1;
                holdBlock();
                break;
            case 2:
                holdMove[2][0] = 2;
                holdMove[2][1] = 2;
                holdMove[3][0] = 2;
                holdMove[3][1] = 2;
                holdBlock();
                break;
            case 3:
                holdMove[1][0] = 3;
                holdMove[2][0] = 3;
                holdMove[2][1] = 3;
                holdMove[3][1] = 3;
                holdBlock();
                break;
            case 4:
                holdMove[1][1] = 4;
                holdMove[2][1] = 4;
                holdMove[2][0] = 4;
                holdMove[3][0] = 4;
                holdBlock();
                break;
            case 5:
                holdMove[2][1] = 5;
                holdMove[3][0] = 5;
                holdMove[3][1] = 5;
                holdMove[3][2] = 5;
                holdBlock();
                break;
            case 6:
                holdMove[1][0] = 6;
                holdMove[1][1] = 6;
                holdMove[2][0] = 6;
                holdMove[3][0] = 6;
                holdBlock();
                break;
            case 7:
                holdMove[1][0] = 7;
                holdMove[1][1] = 7;
                holdMove[2][1] = 7;
                holdMove[3][1] = 7;
                holdBlock();
                break;
        }
    } else {
        holdBlockS[1] = BlockNo[0];
        BlockNo[0] = holdBlockS[0];
        holdBlockS[0] = holdBlockS[1];
        genFlag = 1;
        holdFlag = 1;
        switch (holdBlockS[0]) {
            case 1:
                holdMove[0][1] = 1;
                holdMove[1][1] = 1;
                holdMove[2][1] = 1;
                holdMove[3][1] = 1;
                holdBlock();
                break;
            case 2:
                holdMove[2][0] = 2;
                holdMove[2][1] = 2;
                holdMove[3][0] = 2;
                holdMove[3][1] = 2;
                holdBlock();
                break;
            case 3:
                holdMove[1][0] = 3;
                holdMove[2][0] = 3;
                holdMove[2][1] = 3;
                holdMove[3][1] = 3;
                holdBlock();
                break;
            case 4:
                holdMove[1][1] = 4;
                holdMove[2][1] = 4;
                holdMove[2][0] = 4;
                holdMove[3][0] = 4;
                holdBlock();
                break;
            case 5:
                holdMove[2][1] = 5;
                holdMove[3][0] = 5;
                holdMove[3][1] = 5;
                holdMove[3][2] = 5;
                holdBlock();
                break;
            case 6:
                holdMove[1][0] = 6;
                holdMove[1][1] = 6;
                holdMove[2][0] = 6;
                holdMove[3][0] = 6;
                holdBlock();
                break;
            case 7:
                holdMove[1][0] = 7;
                holdMove[1][1] = 7;
                holdMove[2][1] = 7;
                holdMove[3][1] = 7;
                holdBlock();
                break;
            default:
                $(elemTd).addClass("default");
        }
    }
    for (var i = 1; i < 20; i++) {
        for (var j = 1; j < 11; j++) {
            if (move[i][j] == 1) {
                array[i][j] = 0;
                move[i][j] = 0;
            }
        }
    }
    genBlock();
}

function holdBlock() {
    $('#holdBlock').find('tr').each(function (i, elemTr) {
        $(elemTr).children().each(function (j, elemTd) {
            $(elemTd).removeClass();
            switch (holdMove[i][j]) {
                case 1:
                    $(elemTd).addClass("stickLightBlue");
                    break;
                case 2:
                    $(elemTd).addClass("stickYellow");
                    break;
                case 3:
                    $(elemTd).addClass("stickGreen");
                    break;
                case 4:
                    $(elemTd).addClass("stickRed");
                    break;
                case 5:
                    $(elemTd).addClass("stickPurple");
                    break;
                case 6:
                    $(elemTd).addClass("stickBlue");
                    break;
                case 7:
                    $(elemTd).addClass("stickOrange");
                    break;
                case 9:
                    $(elemTd).addClass("stickBlock");
                    break;
                default:
                    $(elemTd).addClass("default");
            }
        })
    });
}


















//ブロックの設定
function genBlock(blockNum) {
    //moveFlag .. (0 = 動かせるブロックが無い) (1 = 動かせるブロックがある)
    if (moveFlag == 0) {
        if (genFlag == 0) {
            for (var i = 0; i < 2; i++) {
                BlockNo[i] = BlockNo[i + 1];
            }
            BlockNo[2] = Math.ceil(Math.random() * 7);
        } else {
            genFlag = 0;
        }
        switch (BlockNo[0]) {
            case 1:
                array[1][5] = 1;
                array[2][5] = 1;
                array[3][5] = 1;
                array[4][5] = 1;
                move[1][5] = 1;
                move[2][5] = 1;
                move[3][5] = 1;
                move[4][5] = 1;
                moveFlag = 1;
                break;
            case 2:
                array[1][5] = 2;
                array[1][6] = 2;
                array[2][5] = 2;
                array[2][6] = 2;
                move[1][5] = 1;
                move[1][6] = 1;
                move[2][5] = 1;
                move[2][6] = 1;
                moveFlag = 1;
                break;
            case 3:
                array[1][5] = 3;
                array[2][5] = 3;
                array[2][6] = 3;
                array[3][6] = 3;
                move[1][5] = 1;
                move[2][5] = 1;
                move[2][6] = 1;
                move[3][6] = 1;
                moveFlag = 1;
                break;
            case 4:
                array[1][6] = 4;
                array[2][6] = 4;
                array[2][5] = 4;
                array[3][5] = 4;
                move[1][6] = 1;
                move[2][6] = 1;
                move[2][5] = 1;
                move[3][5] = 1;
                moveFlag = 1;
                break;
            case 5:
                array[1][5] = 5;
                array[2][4] = 5;
                array[2][5] = 5;
                array[2][6] = 5;
                move[1][5] = 1;
                move[2][4] = 1;
                move[2][5] = 1;
                move[2][6] = 1;
                moveFlag = 1;
                break;
            case 6:
                array[1][5] = 6;
                array[1][6] = 6;
                array[2][5] = 6;
                array[3][5] = 6;
                move[1][5] = 1;
                move[1][6] = 1;
                move[2][5] = 1;
                move[3][5] = 1;
                moveFlag = 1;
                break;
            case 7:
                array[1][5] = 7;
                array[1][6] = 7;
                array[2][6] = 7;
                array[3][6] = 7;
                move[1][5] = 1;
                move[1][6] = 1;
                move[2][6] = 1;
                move[3][6] = 1;
                moveFlag = 1;
                break;
        }
        nextMove = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
        switch (BlockNo[1]) {
            case 1:
                nextMove[0][1] = 1;
                nextMove[1][1] = 1;
                nextMove[2][1] = 1;
                nextMove[3][1] = 1;
                nextBlock();
                break;
            case 2:
                nextMove[2][0] = 2;
                nextMove[2][1] = 2;
                nextMove[3][0] = 2;
                nextMove[3][1] = 2;
                nextBlock();
                break;
            case 3:
                nextMove[1][0] = 3;
                nextMove[2][0] = 3;
                nextMove[2][1] = 3;
                nextMove[3][1] = 3;
                nextBlock();
                break;
            case 4:
                nextMove[1][1] = 4;
                nextMove[2][1] = 4;
                nextMove[2][0] = 4;
                nextMove[3][0] = 4;
                nextBlock();
                break;
            case 5:
                nextMove[2][1] = 5;
                nextMove[3][0] = 5;
                nextMove[3][1] = 5;
                nextMove[3][2] = 5;
                nextBlock();
                break;
            case 6:
                nextMove[1][0] = 6;
                nextMove[1][1] = 6;
                nextMove[2][0] = 6;
                nextMove[3][0] = 6;
                nextBlock();
                break;
            case 7:
                nextMove[1][0] = 7;
                nextMove[1][1] = 7;
                nextMove[2][1] = 7;
                nextMove[3][1] = 7;
                nextBlock();
                break;
        }
        nextMove = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
        switch (BlockNo[2]) {
            case 1:
                nextMove[0][1] = 1;
                nextMove[1][1] = 1;
                nextMove[2][1] = 1;
                nextMove[3][1] = 1;
                nextBlock2();
                break;
            case 2:
                nextMove[2][0] = 2;
                nextMove[2][1] = 2;
                nextMove[3][0] = 2;
                nextMove[3][1] = 2;
                nextBlock2();
                break;
            case 3:
                nextMove[1][0] = 3;
                nextMove[2][0] = 3;
                nextMove[2][1] = 3;
                nextMove[3][1] = 3;
                nextBlock2();
                break;
            case 4:
                nextMove[1][1] = 4;
                nextMove[2][1] = 4;
                nextMove[2][0] = 4;
                nextMove[3][0] = 4;
                nextBlock2();
                break;
            case 5:
                nextMove[2][1] = 5;
                nextMove[3][0] = 5;
                nextMove[3][1] = 5;
                nextMove[3][2] = 5;
                nextBlock2();
                break;
            case 6:
                nextMove[1][0] = 6;
                nextMove[1][1] = 6;
                nextMove[2][0] = 6;
                nextMove[3][0] = 6;
                nextBlock2();
                break;
            case 7:
                nextMove[1][0] = 7;
                nextMove[1][1] = 7;
                nextMove[2][1] = 7;
                nextMove[3][1] = 7;
                nextBlock2();
                break;
        }
    }
}

// 動かせるブロックの判定(move[i][j] == 1)がある場合は(moveFlag = 1)を保持する
function checkFlag() {
    check = 0;
    for (var i = 1; i < 20; i++) {
        for (var j = 1; j < 11; j++) {
            if (move[i][j] == 1) {
                check = 1;
            }
        }
    }
    if (check == 0) {
        //動かせるブロックがあるので、ブロックを生成しないようにする
        moveFlag = 0;
    }
}

// 表示
function display() {
    $('#game').find('tr').each(function (i, elemTr) {
        $(elemTr).children().each(function (j, elemTd) {
            $(elemTd).removeClass();
            switch (array[i][j]) {
                case 1:
                    $(elemTd).addClass("stickLightBlue");
                    break;
                case 2:
                    $(elemTd).addClass("stickYellow");
                    break;
                case 3:
                    $(elemTd).addClass("stickGreen");
                    break;
                case 4:
                    $(elemTd).addClass("stickRed");
                    break;
                case 5:
                    $(elemTd).addClass("stickPurple");
                    break;
                case 6:
                    $(elemTd).addClass("stickBlue");
                    break;
                case 7:
                    $(elemTd).addClass("stickOrange");
                    break;
                case 9:
                    $(elemTd).addClass("stickBlock");
                    break;
                default: //ブロックが無い場合はそれ以外の値(0の予定)
                    $(elemTd).addClass("default"); //ブロックが無い時の色
            }
        })
    });
}

function nextBlock() {
    $('#nextBlock').find('tr').each(function (i, elemTr) {
        $(elemTr).children().each(function (j, elemTd) {
            $(elemTd).removeClass();
            switch (nextMove[i][j]) {
                case 1:
                    $(elemTd).addClass("stickLightBlue");
                    break;
                case 2:
                    $(elemTd).addClass("stickYellow");
                    break;
                case 3:
                    $(elemTd).addClass("stickGreen");
                    break;
                case 4:
                    $(elemTd).addClass("stickRed");
                    break;
                case 5:
                    $(elemTd).addClass("stickPurple");
                    break;
                case 6:
                    $(elemTd).addClass("stickBlue");
                    break;
                case 7:
                    $(elemTd).addClass("stickOrange");
                    break;
                default:
                    $(elemTd).addClass("default");
            }
        })
    });
}

function nextBlock2() {
    $('#nextBlock2').find('tr').each(function (i, elemTr) {
        $(elemTr).children().each(function (j, elemTd) {
            $(elemTd).removeClass();
            switch (nextMove[i][j]) {
                case 1:
                    $(elemTd).addClass("stickLightBlue");
                    break;
                case 2:
                    $(elemTd).addClass("stickYellow");
                    break;
                case 3:
                    $(elemTd).addClass("stickGreen");
                    break;
                case 4:
                    $(elemTd).addClass("stickRed");
                    break;
                case 5:
                    $(elemTd).addClass("stickPurple");
                    break;
                case 6:
                    $(elemTd).addClass("stickBlue");
                    break;
                case 7:
                    $(elemTd).addClass("stickOrange");
                    break;
                default:
                    $(elemTd).addClass("default");
            }
        })
    });
}

//gameOverの処理
function gameEnd() {
    for (var i = 0; i < 11; i++) {
        if (move[1][i] == 2) {
            gameOver = 1
            break;
        }
    }

    if (gameOver == 1) {
        gameOverEfect();

        display();
        document.getElementById("start").innerHTML = "GAME OVER";
        clearInterval(sturt);
    }

}

function gameOverEfect() {
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 11; j++) {
            if (array[i][j] != 0) {
                array[i][j] = 9;
            }
        }
    }
    document.getElementById('game').classList.add('gameEnd')

}



var sturt;

// 呼び出し処理
display();
nextBlock();
nextBlock2();
holdBlock();

//ボタンを押したら始まる
var button = document.querySelector("button");

var initial = function () {
    button.disabled = true;
    document.getElementById("start").innerHTML = "Play";

    //経過時間を表示する
    var time = setInterval(function () {
        timeCounter += 1;
        timeM = Math.floor(timeCounter / 60);
        timeS = timeCounter % 60;
        document.getElementById('time').innerHTML = timeM + ":" + timeS;
        if (document.getElementById('game').classList.contains('gameEnd')) {
            clearInterval(time);
        }
    }, 1000);

    //ゲームの呼び出し
    sturt = setInterval(function () {
        if (masterFlag == 0) {
            deleteS();
            fall();
            genBlock();
            checkFlag();
            display();
            gameEnd();
        }
    }, 400);
}
//一度だけ起動できるようにする
button.addEventListener("click", initial);