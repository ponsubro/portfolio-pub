import React, { Component } from 'react';
import pawwow from './img/pawwow.png';
import child from './img/child.png';
import persona from './img/persona.png';
import device from './img/device.png';
import proto from './img/proto.JPG';
import user from './img/user.png';

class Kaden extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='kaden'>
          <div className="workTitleText">
            <div className="category kadenSub">Industrial Design Project</div>
            <div className="titleText">製品デザインプロジェクト “Pawwow!”</div>
            <div className="year kadenSub">2014</div>
          </div>
        </div>
        <div className="area cover">
          <div className="overviewBottom">
            <p>大学院1年生の授業で、「動物園の困りごとを解消する製品」をデザインするプロジェクトを行いました。</p>
            <p>私たちのチームは、「夜の動物園(Night Zoo)」をテーマに設定しました。</p>
            <p>暗く視界が限られてしまう夜の動物園で、聴覚を使って楽しめる子供向け製品”Pawwow!”(パウワウ)を提案しました。Pawwow!を使うことで、動物たちの生態に対して新しい気づきを得ることが期待できます。</p>
          </div>
          <div className="komidashi">製品イメージ</div>
          <div className="imgResize lastBottom"><img src={pawwow} /></div>
          <div className="midashi kadencl">コンセプト</div>
          <div className="workH1">聴覚を使って動物たちを知る</div>
          <div className="imgBottom">
            <p>夜の動物園では、暗いために動物たちの姿をよく観察することは難しくなります。しかし、動物園には夜に活動が活発になる動物も多くおり、昼とは全く異なった世界が広がっています。</p>
            <p>Pawwow!はそうした動物たちの夜の生態系を、聴覚によって知ることができる製品です。</p>
            <p>「耳をすます」ジェスチャーをすると、Pawwow!から動物たちの鳴き声や活動音が聞こえてきます。<br />
              「聞こえてきたのはどの動物の音だろう、何をしているんだろう」と想像力を働かせながら園内を探検することで、ワクワクしながら動物たちへの理解を深めることができます。</p>
          </div>
          <div className="imgResize imgBottom"><img src={child} /></div>
          <div className="lastBottom">
            <p>また、子供がPawwow!を親の耳元に近づけてあげる(耳打ち)することで、聞こえている音を共有することができます。音の共有によって、親子でのコミュニケーションが活発になることが期待できます。</p>
          </div>
          <div className="midashi kadencl">作品情報</div>
          <div className="mylist">
            <div className="listName">制作の動機：</div>
            <div className="listContent">大学院の授業課題として制作</div>
          </div>
          <div className="mylist">
            <div className="listName">制作人数：</div>
            <div className="listContent">7人 (デザイナー4人、エンジニア3人)</div>
          </div>
          <div className="mylist">
            <div className="listName">制作年：</div>
            <div className="listContent">2014年</div>
          </div>
          <div className="mylist">
            <div className="listName">その他：</div>
            <div className="listContent">デジタルコンテンツEXPO2014出展</div>
          </div>
          <div className="adjust69"></div>
          <div className="midashi kadencl">プロジェクトのプロセス</div>
          <div className="midashiCap"><p>本プロジェクトは、以下のプロセスで行われました。</p></div>
          <div className="process">
            <div className="pnum">1. ペルソナ設定</div>
            <div className="pnum">2. 課題調査</div>
            <div className="pnum">3. アイデア出し</div>
            <div className="pnum">4. 製品イメージの作成</div>
            <div className="pnum">5. 最終成果物の作成</div>
          </div>
          <div className="adjust69"></div>
          <div className="midashi kadencl">1. ペルソナ設定</div>
          <div className="mylist">
            <div className="listName">ペルソナ：</div>
            <div className="listContent">子供 (＋同伴する大人)</div>
          </div>
          <div className="imgBottom"><p>最初に、動物園に来場すると思われるペルソナを8パターン出しました。その中から、「子供(＋同伴する大人)」をメインのペルソナに設定しました。Night Zooは夏休み中に開催されるイベントなので、自由研究の調査のために動物園に来場するのではないか、と考えたからです。
<br />ペルソナは、チーム内でイメージが共有しやすいように、イラストで表現しました。</p></div>
          <div className="komidashi">ペルソナイメージ(一部)</div>
          <div className="imgCap"><p>私が担当したイラストです。</p></div>
          <div className="imgResize overviewBottom"><img src={persona} /></div>
          <div className="midashi kadencl">2. 課題調査</div>
          <div className="mylist">
            <div className="listName">課題：</div>
            <div className="listContent">夜の動物園は暗く、動物の姿が見え辛い<br />(しかし、ライトなどで照らすことはできない)</div>
          </div>
          <div className="overviewBottom"><p>実際に動物園に赴き、園内のフィールドワークと、スタッフの方へのインタビューを実施しました。園の歩道や檻には照明設備が少ないので、夜は動物の姿が十分に見えないことがわかりました。さらに、動物への刺激などを考慮して、檻内にライトを設置することはできないということもわかりました。</p></div>
          <div className="midashi kadencl">3. アイデア出し</div>
          <div className="mylist">
            <div className="listName">作るもの：</div>
            <div className="listContent">「耳をすます」ジェスチャーをすると、動物たちのリアルな音が聞こえてくる</div>
          </div>
          <div className="overviewBottom"><p>プロセス1,2をふまえて方針を決定し、アイデア出しを行いました。子供がワクワクする気持ちを大切にしたいという思いから、暗い動物園での探検をより盛り上げるような製品をめざしました。<br />
            視覚が制限されてしまうならば、聴覚を使って楽しんでもらってはどうか。日常の自然な動作がデバイスを使うトリガーになったら面白いのではないか。といった議論を重ねた末、「耳をすます（手につけた製品を耳元に当てる）」動作をすると、動物たちの声や生活音が聞こえてくる、というアイデアにまとまりました。</p></div>
          <div className="midashi kadencl">4. 製品イメージの作成</div>
          <div className="midashiCap"><p>アイデアをもとに、製品のデザインと実際に動かす仕組みを考えていきました。</p></div>
          <div className="komidashi">デバイスデザイン</div>
          <div className="imgCap"><p>子供が手につける製品であることから、動物の手と肉球をイメージしたデザインに決まりました。デザインは私がメインで担当しました。</p></div>
          <div className="imgResize imgBottom"><img src={device} /></div>
          <div className="komidashi">仕組み</div>
          <div className="overviewBottom"><p>檻の中にマイクを設置し、Bluetooth接続でデバイスにリアルタイムで音を送ります。<br />デバイスのスピーカーは骨伝導スピーカーになっており、「耳をすます」動作をしているときだけ音が聞こえるようになっています。</p></div>
          <div className="midashi kadencl">5. 最終成果物の制作</div>
          <div className="midashiCap"><p>デザイナーは3Dモデリングと筐体の制作、エンジニアは機構の制作をそれぞれ担当しました。</p></div>
          <div className="komidashi">製品イメージ</div>
          <div className="imgResize imgBottom"><img src={pawwow} /></div>
          <div className="komidashi">プロトタイプ</div>
          <div className="imgResize imgBottom"><img src={proto} /></div>
          <div className="komidashi">プロトタイプ使用シーン</div>
          <div className="imgCap"><p>プロトタイプを親子に使用してもらっている様子です。</p></div>
          <div className="imgResize imgBottom"><img src={user} /></div>
          <div className="lastBottom"><p>デバイスの名前”Pawwow!”は”paw”(哺乳類の手足)と”wow”(感嘆詞)を組み合わせた造語です。デバイスの見た目の特徴と、使った時にワクワクする気持ちを表現しています。</p></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Kaden;
