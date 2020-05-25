/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
export function onRenderBody(
  { setHeadComponents }
) {
 setHeadComponents([
     <script 
     key="abcd"
     type="text/javascript"
     src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"
     />,
      <script
      key="abc1"
      type="text/javascript"
      src="/public/js/jquery-1.10.2.min.js"
    />,
    <script
    key="abc2"
    type="text/javascript"
    src="/public/js/jquery-migrate-1.2.1.min.js"
  />,
  <script
key="abc4"
type="text/javascript"
src="/public/js/jquery.flexslider.js"
/>,
<script
key="abc7"
type="text/javascript"
src="/public/js/waypoints.js"
/>,
  <script
  key="abc3"
  type="text/javascript"
  src="/public/js/jquery.fittext.js"
/>,

<script
key="abc5"
type="text/javascript"
src="/public/js/magnific-popup.js"
/>,
<script
key="abc6"
type="text/javascript"
src="/public/js/modernizr.js"
/>,

<script
key="abc0"
type="text/javascript"
src="/public/js/init.js"
/>,
  ]);
}