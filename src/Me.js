import React, { Component } from 'react';
import './Me.css';

class Me extends Component {
  componentDidMount() {
    document.getElementById("content").style.marginBottom = '-101px';
  }

  render() {
    return (
      <div className="area">
        <div className="textPadding"><h1>Me</h1></div>
        <div className="myContainer">
          <div className="myImage">
            <div className="myProfName"><div className="designer">UI/UX Designer</div>Momoko Fujii</div>
            <div className="myPic"></div>
          <div className="hobby">
            <div className="hb">趣味</div>
            <div className="hobbies">イラスト/ 写真(Pentax)/料理/手芸/ゲーム </div>
          </div>
          </div>
          <div className="pbContainer">
            <div className="myMajor">
              <div className="myStr radBorder">なんでもＤＩＹ主義</div>
              <div className="myComment">大学ではデザイン工学を学び、前職はエンジニアという特殊な経歴を活かして、様々な分野の「モノづくり」を行っています。
</div>
            </div>
            <div className="myVision">
              <div className="myStrB unBorder">やりたいこと</div>
              <div className="myComment">サービス開発に関わりたいです。ユーザーに素早く価値を提供し、貰ったフィードバックから日々サービスの向上をしていきたいです。
</div>
            </div>
          </div>
        </div>
        <div className="myGoodAt">
          <div className="tokui topicLetter">得意なこと</div>
          <div className="boxContainer tokui">
            <div className="myBox">イラスト</div>
            <div className="myBox">ＵＩ</div>
            <div className="myBox">３ＤＣＧ</div>
            <div className="myBox">グラフィック</div>
            <div className="myBox">Web開発</div>
          </div>
        </div>
        <div className="myGoodAt">
          <div className="fight topicLetter">これから伸ばしたいこと</div>
          <div className="boxContainer fight">
            <div className="myBoxF">ＵＩ</div>
            <div className="myBoxF">色彩感覚</div>
            <div className="myBoxF">開発速度</div>
            <div className="myBoxF">カメラ</div>
            <div className="myBoxF">お菓子作り</div>
          </div>
        </div>
        <div className="myHistory hsColor">
          <div className="topicLetter">経歴</div>
          <div className="hsText">2016-2018 | 富士通株式会社<br />
            2014-2016 | 首都大学東京システムデザイン研究科インダストリアルアート学域<br />
            2010-2014 | 首都大学東京システムデザイン学部インダストリアルアートコース </div>
        </div>
      </div>
    );
  }
}

export default Me;