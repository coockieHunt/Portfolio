import React from "react";
import * as SplitLayourStyle from "./style";

export class SplitLayout extends React.Component{
    render(){
        return(
            <>
                <SplitLayourStyle.SplitLayout>
                    <SplitLayourStyle.SplitLayoutLeft leftWidth={this.props.leftWidth}>
                        <div className="content">
                            {this.props.left}
                        </div>
                    </SplitLayourStyle.SplitLayoutLeft>
                    <SplitLayourStyle.SplitLayoutRight rightWidth={this.props.rightWidth}>
                        <div className="content">
                            {this.props.right}
                        </div>
                    </SplitLayourStyle.SplitLayoutRight>
                </SplitLayourStyle.SplitLayout>
            </>
        )
    }

}

