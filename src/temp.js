const regex = /<iframe\s[^>]*src="(?:https?:)?\/\/www\.youtube\.com\/embed\/([^"?]+)\??.*?<\/iframe>/g;

const htmlContent = 
`<table class="simple-little-table" style="width: 100%; font-size: 11pt; border-spacing: 0px; margin-top: 15px; margin-bottom: 20px;" cellspacing="0">
<tbody>
<td style="width: 11%; text-align: center; vertical-align: middle; height: 56px;">15 лет</td>
</tr>
<tr style="height: 56px;">
<td style="width: 12%; vertical-align: middle; height: 56px;">
<p style="text-align: left; padding-left: 10px; padding-right: 10px; margin: 0px;"><strong>Мощность</strong></p>
</tbody>
</table>
<p><iframe src="//www.youtube.com/embed/KlqHMD7FwcI"></iframe></p>
<p><iframe src="https://www.youtube.com/embed/lOBU2H3kvIE?showinfo=0" width="375" height="210" frameborder="0" allowfullscreen="allowfullscreen" loading="lazy"></iframe></p>`
;

const processedHtml = htmlContent.replace(regex, '<div id="$1" class="youtube"></div>');

console.log(processedHtml);
