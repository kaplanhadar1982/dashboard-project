using System;

namespace Ta9.Domain
{
    public class Server
    {
        public string Id {set;get;}

        public string Ip {set;get;}

        public string Os {set;get;}

        public DateTime LocalTime {set;get;}

        public string Browser {set;get;}

        public string Resolution {set;get;}

        public bool IsOnline{set;get;}
        
    }
}