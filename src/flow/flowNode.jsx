import React, { Component, PureComponent, createRef, useState } from "react";
import { View, Text, StyleSheet, Animated, PanResponder, Pressable } from "react-native";

class FlowNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: new Animated.ValueXY(),
        };
        this.flowNodeTextRef = createRef()
        this.flowNodePanResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (e) => {
                if (this.flowNodeTextRef.current == e.target) {
                    this.props.blockFlowViewport(true)
                    return true
                }
                return false
            },
            onPanResponderMove: Animated.event([
                null,
                { dx: this.state.position.x, dy: this.state.position.y },
            ]),
            onPanResponderRelease: () => {
                this.state.position.extractOffset();
                this.props.blockFlowViewport(false)
            },
        });
    }

    render() {
        return (
            <Animated.View
                style={[
                    {
                        transform: [
                            { translateX: this.state.position.x },
                            { translateY: this.state.position.y },
                        ],
                    },
                    styles.flowNode,
                ]}
            >
                <View style={styles.circle} ></View>
                    <Text style={styles.flowNodeText} selectable={false} ref={this.flowNodeTextRef} {...this.flowNodePanResponder.panHandlers}>
                        Node
                    </Text>
                <View style={[styles.circle, styles.invert]}></View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    flowNode: {
        position: "absolute",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    flowNodeText: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 1,
        paddingVertical: 0.5,
        backgroundColor: "purple",
        color: "white",
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: "red",
    },
    invert: {
        transform: [{ rotate: "180deg" }],
    },
});

export { FlowNode };
