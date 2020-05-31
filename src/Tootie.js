import React, { Component } from 'react';
import phone from './img/phone001.png';
import narabu from './img/phone002.png';
import speed from './img/phone003.png';
import kanban from './img/phone004.png';
import shime from './img/phone005.png';
import color from './img/color.png';
import logo from './img/tootie_sp.png';
import cf from './img/tootiecf.png';

class Tootie extends Component {

  render() {
    return (
      <React.Fragment>
        <div className='tootie'>
          <div className="workTitleText">
            <div className="category tootieSub">App UI/UX Design</div>
            <div className="titleText">To Do アプリ “Tootie”</div>
            <div className="year tootieSub">2019</div>
          </div>
        </div>
        <div className="area cover">
          <div className="overviewBottom">
            <p>私は個人で開発を行う際、タスクの管理にToDoアプリを使用しています。<br />ToDoアプリはスピーディに操作できるけれど、個人開発に適した設計ではないように感じています。<br />
              また、既存のプロジェクト管理ツールは、個人開発者とっては機能が過剰であり、管理コストがかかります。</p>
            <p>そこで、個人開発でのタスク管理に特化したToDoアプリ”Tootie”を作りました。</p>
          </div>
          <div className="imgResize imgBottom"><img src={phone} /></div>
          <div className="imgResize lastBottom"><img src={narabu} /></div>
          <div className="midashi tootiecl">作品情報</div>
          <div className="mylist">
            <div className="listName">制作の動機：</div>
            <div className="listContent">自分が使いやすいアプリを作りたかったため</div>
          </div>
          <div className="mylist">
            <div className="listName">制作人数：</div>
            <div className="listContent">1人</div>
          </div>
          <div className="mylist">
            <div className="listName">制作年：</div>
            <div className="listContent">2019年</div>
          </div>
          <div className="mylist">
            <div className="listName">使用ツール：</div>
            <div className="listContent"> Illustrator, Figma, Marvel</div>
          </div>
          <div className="adjust69"></div>
          <div className="midashi tootiecl">特長</div>
          <div className="workH1">迷わずスピーディにToDo管理</div>
          <div className="imgBottom">
            <p>機能を本当に必要なものだけに絞っているので、ユーザーがすばやくタスクを作成、編集することが可能です。<br />また、よく使うボタンを文字ではなくアイコンにすることで、初めて使う人でも迷わず直感的に操作することができます。</p>
          </div>
          <div className="imgResize overviewBottom"><img src={speed} /></div>
          <div className="workH1">開発者がなじみやすい管理形式</div>
          <div className="imgBottom">
            <p>Tootieは開発者にはおなじみの「かんばん方式」でのタスク管理が行いやすい設計になっています。タスクを格納するリストに「To Do」「Doing」「Done」といった、タスクの状態を表す名前をつけることによって、タスクの状態が一目でわかります。タスクはドラッグ＆ドロップで動かすことができるので、状態に変更があったときは素早く更新が行えます。</p>
          </div>
          <div className="imgResize overviewBottom"><img src={kanban} /></div>
          <div className="workH1">締め切りを管理する機能に特化</div>
          <div className="imgBottom">
            <p>Tootieでは、タスクに締め切りを設定することができます。締め切りの設定は、具体的な日付を入力する方法の他に、「明日」「一週間後」などの節目をワンタップで素早く設定する方法があります。
<br />また、期日が迫ってくるとタスクに「あと○日」「明日」といった表記がされるため、締め切りが迫っているタスクも見落としにくくなっています。</p>          </div>
          <div className="imgResize lastBottom"><img src={shime} /></div>
          <div className="midashi tootiecl">プロジェクトのプロセス</div>
          <div className="midashiCap"><p>本プロジェクトは、以下のプロセスで行われました。</p></div>
          <div className="process">
            <div className="pnum">1. ペルソナ設定</div>
            <div className="pnum">2. 競合アプリ調査、 課題抽出</div>
            <div className="pnum">3. WF作成</div>
            <div className="pnum">4. プロトタイプ作成、UX検証、修正</div>
            <div className="pnum">5. テーマカラー、ロゴの作成</div>
          </div>
          <div className="adjust69"></div>
          <div className="midashi tootiecl">1. ペルソナ設定</div>
          <div className="mylist">
            <div className="listName">年齢、職業 ：</div>
            <div className="listContent">20代~30代半ばの開発者</div>
          </div>
          <div className="mylist">
            <div className="listName">特徴 ：</div>
            <div className="listContent">仕事以外にも個人開発を行っている</div>
          </div>
          <div className="mylist">
            <div className="listName">性格 ：</div>
            <div className="listContent">効率重視、面倒なことはやりたくない</div>
          </div>
          <div className="overviewBottom"><p>今回制作したアプリは「自分が本当に欲しいものをつくる」というモチベーションから始まったため、ペルソナは私自身と近しい境遇の人に設定しました。
<br />個人開発を行う際に、「プロジェクト管理ツールほど厳重ではなく、ToDoアプリよりはしっかりとタスク管理したい」という願望を持つ人物像です。</p></div>
          <div className="midashi tootiecl">2. 競合アプリ調査、課題抽出</div>
          <div className="mylist">
            <div className="listName">課題 ：</div>
            <div className="listContent">多機能なアプリはメンテナンスが面倒であり、シンプルなアプリはタスクの状態がわかりにくい</div>
          </div>
          <div className="overviewBottom"><p>既存のToDoアプリ、タスク管理アプリ15個程を一通り使ってみた後、それぞれの長所と短所、気づいたことを挙げていきました。
<br />多機能なアプリは、どこにどの機能があるのかが煩雑で、かつ編集する項目が多いことから、タスクの編集に時間がかかるという課題が挙がりました。
<br />一方でシンプルな機能を持つアプリでは、メンテナンスは容易であるが、タスクの状態がわかりにくいといった短所があることが分かりました。</p></div>
          <div className="midashi tootiecl">3. WF作成</div>
          <div className="mylist">
            <div className="listName">方針 ：</div>
            <div className="listContent">必要最低限の機能に絞り、直感的でスピーディな操作ができるようにする</div>
          </div>
          <div className="overviewBottom"><p>2. の結果から、制作するアプリは必要最低限の機能でまとめ、スピーディに操作できるものを目指しました。また、アプリごとに操作や機能の名称にバラツキがあり煩雑さを感じたため、本アプリではアイコンを用いて直感的に操作できるようにと考えました。
<br />これらを踏まえて、ワイヤフレームをUIデザインツールであるFigmaを用いて制作しました。</p></div>
          <div className="midashi tootiecl">4. プロトタイプ作成、UX検証、修正</div>
          <div className="overviewBottom"><p>3.で作成したワイヤフレームから、Marvelを用いてプロトタイプを制作しました。実際にユーザーが使用する流れを何度も確認し、検証を行いました。使いづらい部分があれば修正し、再度検証を行います。これらの作業を何度も行うことで、必要な機能の選定や、UIの調整を行いました。
<br />アプリの主要機能である、期日を「明日」「一週間後」などに設定するボタンは、本プロセスを何度も繰り返して調整しました。</p></div>
          <div className="midashi tootiecl">5. テーマカラー、ロゴの作成</div>
          <div className="midashiCap"><p>このアプリのカラーやロゴは、日本の電車がモチーフになっています。「このアプリで管理したタスクが予定通りにうまくいくように」という願いが込められており、「予定(定刻)通りに動く＝日本の電車」という様に着想を得ました。
</p></div>
          <div className="komidashi">テーマカラー</div>
          <div className="imgCap"><p>テーマカラーには緑を選びました。これは、日本の電車によく使われている色であることと、締め切りに追われている開発者に少しでもリラックスして欲しいという思いから選びました。</p></div>
          <div className="imgResizeC imgBottom"><img src={color} /></div>
          <div className="komidashi">アプリ名、ロゴ</div>
          <div className="mylist">
            <div className="listName">アプリ名 ：</div>
            <div className="listContent">tootie</div>
          </div>
          <div className="imgCap"><p>汽車の警笛の擬音を表す英単語”toot”から、tootieと名付けました。</p><p>ロゴマークは、汽車のヘッドマークのグラフィックをモチーフに考案しました。
<br />ロゴタイプは、Puritanというフォントをベースに作りました。</p></div>
          <div className="imgResize imgBottom"><img src={logo} /></div>
          <div className="imgResize lastBottom"><img src={cf} /></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tootie;