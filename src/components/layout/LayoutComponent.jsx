import React from "react";
import * as SplitLayourStyle from "./style";

export class SplitLayout extends React.Component{
    render(){
        return(
            <>
                <SplitLayourStyle.SplitLayout>
                    <SplitLayourStyle.SplitLayoutLeft>
                        <div className="content">
                            {this.props.left}
                        </div>
                    </SplitLayourStyle.SplitLayoutLeft>
                    <SplitLayourStyle.SplitLayoutRight>
                        <div className="content">
                            {this.props.right}
                        </div>
                    </SplitLayourStyle.SplitLayoutRight>
                </SplitLayourStyle.SplitLayout>
            </>
        )
    }

}

