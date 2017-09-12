import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {FlatButton, RaisedButton, Divider} from 'material-ui';
class Content extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardHeader
                    title="제목제목제목제목"
                    subtitle="서브타이틀서브타이틀"
                />
                <CardTitle title="제목 제목 제목" subtitle="2017년 09월 18일" />
                <Divider />
                <CardText style={{'line-height':'2rem','min-height':'40rem'}}>
                    [뉴욕=이데일리 안승찬 특파원] 유엔 안전보장이사회의 새로운 대북 제재결의안 2375호가 11일(현지시간) 만장일치로 채택됐다.

                    북한의 6차 핵실험 직후인 지난 4일 안보리의 긴급회의가 소집된 이후 9일 만에 추가 제재 결의안이 채택된 것이다. 이전 제제 결의안은 북한의 ICBM(대륙간 탄도미사일)급 미사일이 발사된 이후 채택되는 데까지 33일이 걸렸다. 유례없는 속도전이다.

                    대북 제재안에 소극적이던 중국과 러시아도 이날 표결에 참여해 제재안에 찬성표를 던졌다.

                    애초 미국이 마련한 제재안 초안에는 북한 김정은 정권의 생명줄인 원유 공급을 차단하는 등의 내용이 포함돼 있었다. 김정은 북한 노동당 위원장에 대한 제재도 들어가 있었다.

                    하지만 중국과 러시아와의 조율 과정에서 수위를 상당히 낮췄다. 중국과 러시아의 반대로 북한에 대한 원유 공급 차단은 포함되지 않았다. 중국과 러시아를 끌어들인 대신 제재 수위가 낮아졌다.

                    기대를 모았던 원유 차단은 실패했지만, 정유제품에 대해서는 200만배럴의 상한선을 설정했다.

                    북한의 원유 수입은 연간 400만배럴, 휘발유·경유·등유 등의 정유제품 수입 물량은 연간 450만배럴 수준인 것으로 알려졌다. 정유제품의 수입 상한선 설정으로 유류제품 수입의 절반이 줄어들게 된다.

                    또 액화천연가스(LNG)와 천연가스 부산물인 콘덴세이트(condensate·경질 휘발성 액체 탄화수소)의 북한 수출도 전면 금지된다.

                    니키 헤일리 유엔 주재 미국대사는 “북한 유류 공급의 30%를 차단하는 셈”이라고 강조했다.

                    북한의 주요 외화 수입원인 섬유·의류 제품의 수출도 전면 금지된다. 모든 직물과 의류 완제품, 부분품이 제재 대상에 포함됐다.

                    기존 유엔 제재로 석탄 수출이 막힌 북한은 섬유·의류 제품가 북한의 대중국 수출액 1위로 떠올랐다. 북한에 중국에 의류를 수출해 벌어들인 외화는 지난 2015년 기준으로 약 8억달러에 달한다. 섬유와 의류 수출까지 막아 북한의 자금줄을 추가로 막겠다는 의지다.

                    또 북한의 해외노동자도 고용계약 기간이 만료되면 신규 허가를 내주지 않도록 해 자연적으로 감소하도록 유도할 방침이다.

                    안승찬 (ahnsc@edaily.co.kr)

                </CardText>
                <CardActions>

                </CardActions>
            </Card>
        );
    }
}

Content.propTypes = {};

Content.defaultProps = {};

export default Content;