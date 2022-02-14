
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("/Users/julietnwagwuume-ezeoke/Desktop/sabf_2022/src/pages/404.tsx")),
  "component---src-pages-attend-tsx": preferDefault(require("/Users/julietnwagwuume-ezeoke/Desktop/sabf_2022/src/pages/attend.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/julietnwagwuume-ezeoke/Desktop/sabf_2022/src/pages/index.tsx")),
  "component---src-pages-pitch-tsx": preferDefault(require("/Users/julietnwagwuume-ezeoke/Desktop/sabf_2022/src/pages/pitch.tsx")),
  "component---src-pages-press-tsx": preferDefault(require("/Users/julietnwagwuume-ezeoke/Desktop/sabf_2022/src/pages/press.tsx")),
  "component---src-pages-speakers-tsx": preferDefault(require("/Users/julietnwagwuume-ezeoke/Desktop/sabf_2022/src/pages/speakers.tsx")),
  "component---src-pages-team-tsx": preferDefault(require("/Users/julietnwagwuume-ezeoke/Desktop/sabf_2022/src/pages/team.tsx"))
}

