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

var Myview = React.createClass({

	render: function() {
		return (
			<div className="weui-demo">
				<div className="weui_panel">
            <div className="weui_panel_hd">我</div>
            <div className="weui_panel_bd">
                <div className="weui_media_box weui_media_small_appmsg">
                    <div className="weui_cells weui_cells_access">
                      {items.map(function (item,index) {
                        return (
                          <Link className="weui_cell" key={index} to={{ pathname: item.pathname }}>
                            <div className="weui_cell_hd">
                              <i className={"fa fa-"+item.icon}></i>
                            </div>
                            <div className="weui_cell_bd weui_cell_primary">
                              <p>{item.text}</p>
                            </div>
                            <span className="weui_cell_ft"></span>
                          </Link>
                        )
                      })}
                    </div>
                </div>
            </div>
        </div>
			</div>
		);
	}

});

module.exports = Myview;