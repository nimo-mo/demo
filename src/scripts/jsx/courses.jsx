import React from 'react';
import { Link } from 'react-router';
import WeUI from 'react-weui';

const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter, Button} = WeUI;

var items = [ { icon:'user',text:'我要选课', pathname:'/demo' },
              { icon:'cog',text:'我的拼团', pathname:'/routerDemo' },
              { icon:'dashboard',text:'优惠券', pathname:'/demo' },
              { icon:'compress',text:'个人信息', pathname:'/demo' },
              { icon:'diamond',text:'我购买的课程', pathname:'/demo' },
              { icon:'code',text:'我参加的课程', pathname:'/demo' },
              { icon:'comments',text:'我关注的课程', pathname:'/demo' } ];

var Courses = React.createClass({

	render: function() {
		return (
			<div className="weui-demo">
				<div className="weui_panel weui_panel_access">
            <div className="weui_panel_hd">图文组合列表</div>
            <div className="weui_panel_bd">
                <a href="javascript:void(0);" className="weui_media_box weui_media_appmsg">
                  <div className="weui_media_hd">
                    <img alt="120x120" />
                  </div>
                  <div className="weui_media_bd">
                    <h4 className="weui_media_title">标题一</h4>
                    <p className="weui_media_desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                  </div>
                </a>
                <a href="javascript:void(0);" className="weui_media_box weui_media_appmsg">
                  <div className="weui_media_hd">
                    <img src="about:_blank" />
                  </div>
                  <div className="weui_media_bd">
                    <h4 className="weui_media_title">标题二</h4>
                    <p className="weui_media_desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                  </div>
                </a>
            </div>
            <a className="weui_panel_ft" href="javascript:void(0);">查看更多</a>
        </div>
			</div>
		);
	}

});

module.exports = Courses;