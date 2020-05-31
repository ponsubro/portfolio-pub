import React, { Component } from 'react';
import toppage from './img/toppage.png';
import profpage from './img/profpage.png';
import workspage from './img/workspage.png';
import webcl from './img/colorschemeweb.png';
import responsive from './img/responsive.png';

class Portfolio extends Component {

  render() {
    return (
      <React.Fragment>
        <div className='portfolio'>
          <div className="workTitleText">
            <div className="category portfolioSub">Web UI Design & Coding</div>
            <div className="titleText">ポートフォリオサイト　“fmym”</div>
            <div className="year portfolioSub">2019</div>
          </div>
        </div>
        <div className="area cover">
          <div className="overviewBottom">
            <p>今までに制作した作品を展示するために、ポートフォリオサイトを制作しました。</p>
            <p>自分の性格やデザインに対する考え方を少しでも伝えるために、既存のポートフォリオサイト作成サービスは使用せず、デザインからコーディングまで全て自分の力で制作しました。</p>
          </div>
          <div className="komidashi">トップページ</div>
          <div className="imgResize imgBottom"><img src={toppage} /></div>
          <div className="komidashi">プロフィールページ</div>
          <div className="imgResize imgBottom"><img src={profpage} /></div>
          <div className="komidashi">作品一覧ページ</div>
          <div className="imgResize lastBottom"><img src={workspage} /></div>
          <div className="midashi portfoliocl">作品情報</div>
          <div className="mylist">
            <div className="listName">制作の動機：</div>
            <div className="listContent">自分が今まで制作した作品をアーカイブするため</div>
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
            <div className="listContent">Photoshop, Illustrator, Figma</div>
          </div>
          <div className="mylist">
            <div className="listName">環境・言語：</div>
            <div className="listContent">JavaScript, React.js, HTML, CSS, Firebase</div>
          </div>
          <div className="adjust69"></div>
          <div className="midashi portfoliocl">コンセプト</div>
          <div className="workH1">「Momoko Fujiiって誰？」に答える</div>
          <div className="imgBottom">
            <p>自分がものづくりしていく上で大切にしている「なんでもDIY主義」のもと、Webページのデザインだけでなく実装も全て自分で行っています。</p>
            <p>UIデザインは、自分の作品を引き立たせるために極力シンプルで見やすい配置・色にしつつ、トップページやプロフィールページでは得意なグラフィック能力を活かした画面にしています。これにより、「きちんとしつつも遊び心を忘れない」自分のデザインへの姿勢を表現しています。</p>
            <p>トップページのグラフィックは、猫・植物・ゲーム・パンといった私の好きなもので構成しており、私という人物についての自己紹介も兼ねています。</p>
          </div>
          <div className="imgResizeC overviewBottom"><img src={webcl} /></div>
          <div className="workH1">レスポンシブデザイン対応</div>
          <div className="imgBottom">
            <p>デバイスに依存せずにWebページを快適に見てもらえるよう、全てのページがレスポンシブ対応しています。<br />
              ワイヤフレーム作成の段階でレスポンシブ対応させることを考慮していたため、画面サイズが変わっても破綻しないデザインになっています。</p>
          </div>
          <div className="imgResize lastBottom"><img src={responsive} /></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Portfolio;