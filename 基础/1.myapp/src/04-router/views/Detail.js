/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React from 'react'

export default function Detail(props) {
    console.log(props.match.params.myid,"利用id去后端拿数据。")
    // console.log(props.location.query.myid,"利用id去后端拿数据。")
    // console.log(props.location.state.myid,"利用id去后端拿数据。")

    return (
        <div>
            deteail
        </div>
    )
}
