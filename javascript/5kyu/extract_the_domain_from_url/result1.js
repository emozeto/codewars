function domainName(url){
  return /(www\.)?([a-zA-Z0-9-]*)(\.)/g.exec(url)[2];
}