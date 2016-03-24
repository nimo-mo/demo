import React from 'react';
import { Link } from 'react-router';
import WeUI from 'react-weui';

const {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter, Button} = WeUI;

var items = [ { icon:'user',text:'文字标题', pathname:'/demo' },
              { icon:'cog',text:'文字标题', pathname:'/routerDemo' },
              { icon:'dashboard',text:'文字标题', pathname:'/demo' },
              { icon:'compress',text:'文字标题', pathname:'/demo' },
              { icon:'diamond',text:'文字标题', pathname:'/demo' },
              { icon:'code',text:'文字标题', pathname:'/demo' },
              { icon:'comments',text:'文字标题', pathname:'/demo' } ]

var WeuiDemo = React.createClass({

	render: function() {
		return (
			<div className="weui-demo">
				<div className="weui_panel">
            <div className="weui_panel_hd">小图文组合列表</div>
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

module.exports = WeuiDemo;