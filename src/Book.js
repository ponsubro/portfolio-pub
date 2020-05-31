import React, { Component } from 'react';
import book from './img/book.png';
import nakahyousi from './img/nakahyousi.png';
import yagi from './img/yagi.png';
import neko from './img/neko.png';
import data from './img/data.png';

class Book extends Component {

  render() {
    return (
      <React.Fragment>
        <div className='book'>
          <div className="workTitleText">
            <div className="category bookSub">Book Design</div>
            <div className="titleText">『吾輩は猫である』 表紙デザイン</div>
            <div className="year bookSub">2011</div>
          </div>
        </div>
        <div className="area cover">
          <div className="overviewBottom">
            <p>大学2年生の授業で、夏目漱石 著『吾輩は猫である』の表紙、カバー、帯をデザインしました。</p>
            <p>本を読んだ人が表紙を眺めることで作中の色々なシーンを思い出し、思わずニヤリとしてしまうようなデザインを心がけました。</p>
            <p>ハードカバー仕様の本体は、自分で製本を行いました。</p>
          </div>
          <div className="komidashi">カバーと帯</div>
          <div className="imgResize imgBottom"><img src={book} /></div>
          <div className="komidashi">表紙</div>
          <div className="imgResize imgBottom"><img src={nakahyousi} /></div>
          <div className="komidashi">裏表紙</div>
          <div className="imgResize lastBottom"><img src={yagi} /></div>
          <div className="midashi bookcl">作品情報</div>
          <div className="mylist">
            <div className="listName">制作の動機：</div>
            <div className="listContent">大学の授業課題として制作</div>
          </div>
          <div className="mylist">
            <div className="listName">制作人数：</div>
            <div className="listContent">1人</div>
          </div>
          <div className="mylist">
            <div className="listName">制作年：</div>
            <div className="listContent">2011年</div>
          </div>
          <div className="mylist">
            <div className="listName">使用ツール：</div>
            <div className="listContent">Photoshop, Illustrator</div>
          </div>
          <div className="mylist">
            <div className="listName">その他：</div>
            <div className="listContent">学部内コンペで2位入賞</div>
          </div>
          <div className="adjust69"></div>
          <div className="midashi bookcl">コンセプト</div>
          <div className="workH1">読んだ人が思わずニヤリとしてしまうデザイン</div>
          <div className="imgBottom">
            <p>表紙のあちこちに、作中で登場する印象的なモノが散りばめられています。</p>
            <p>例えば、表紙で空から降り注いでいるのは、作中で寒月が熱心に磨いていた硝子玉です。カバーには、主人公である「吾輩」と関係の深いモノである「水」を連想させる青海波模様を描きました。<br></br>また、「吾輩」をカバーの表でなく、袖の部分に配置することで、少しひねくれて達観した性格を表現しています。</p>
            <p>このように、要素の一つ一つが、ネタバレにならない程度に意味を持ってデザインされています。本を読み終わった後に表紙を眺めると、思わず色々なシーンを思い出してニヤリとしてしまうことでしょう。</p>
          </div>
          <div className="imgResize imgBottom"><img src={neko} /></div>
          <div className="imgResize lastBottom"><img src={data} /></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Book;