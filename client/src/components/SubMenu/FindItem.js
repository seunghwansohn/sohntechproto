//회사의 제품을 조회하기 위한 콤포넌트. 메인 페이지에서 아이템 조회 메뉴를 클릭하면 내용으로 이것이 뜨도록 규정.
//현재는 asdfasdf 같은 시험을 위한 무가치한 내용만 뜨도록 되어있음.

import React, { Component } from 'react';

class FindItem extends Component { 
    render(){
        return (
          <article>
              <table border="1|0">
                  <div>
                  <tr>
                      <th>1-1 asdflkj</th>
                      <th>1-2 asdflkjasdf</th>
                  </tr>
                  <tr>
                      <th>2-1 asdflkj</th>
                      <th>2-2 asdlfkjasdflkj</th>
                  </tr>
                  </div>
              </table>
          </article>
        );
    }
}

export default FindItem;