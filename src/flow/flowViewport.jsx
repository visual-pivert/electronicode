import React, { Component, createRef, useMemo, useState } from "react";
import {
    View,
    StyleSheet,
    Animated,
    PanResponder,
    Text,
    Pressable,
} from "react-native";
import { FlowNode } from "./flowNode";


class FlowViewport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: new Animated.ValueXY(),
            blockFlowViewport: false
        };
        this.flowViewportRef = createRef();
        this.flowViewportChildRef = createRef();

        this.blockFlowViewport = this.blockFlowViewport.bind(this)

        this.flowViewportPanResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (e) => {
                if (false == this.state.blockFlowViewport)
                    return (this.flowViewportRef.current == e.target || this.flowViewportChildRef.current == e.target);
                return false
            },
            onPanResponderMove: Animated.event([
                null,
                { dx: this.state.position.x, dy: this.state.position.y },
            ]),
            onPanResponderRelease: () => {
                this.state.position.extractOffset();
            },
        });
    }

    blockFlowViewport(value) {
        this.setState({blockFlowViewport: value})
    }

    render() {
        return (
            <View
                style={styles.flowViewport__container}
                {...this.flowViewportPanResponder.panHandlers}
                ref={this.flowViewportRef}
            >
                <Animated.View
                    ref={this.flowViewportChildRef}
                    style={[
                        styles.flowViewport__view,
                        {
                            transform: [
                                { translateX: this.state.position.x },
                                { translateY: this.state.position.y },
                            ],
                        },
                    ]}
                >
                    <FlowNode blockFlowViewport={this.blockFlowViewport}></FlowNode>
                    <FlowNode blockFlowViewport={this.blockFlowViewport}></FlowNode>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flowViewport__container: {
        width: "100%",
        height: "100%",
        position: "absolute",
        overflow: "hidden",
        borderRadius: 20
    },

    flowViewport__view: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
});

export { FlowViewport };
