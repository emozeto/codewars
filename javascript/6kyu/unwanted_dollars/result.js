function money_value(s)
{
   return isNaN(+(s.replace(/\$*\s*/g,""))) ? 0.0 : +(s.replace(/\$*\s*/g,""));
}