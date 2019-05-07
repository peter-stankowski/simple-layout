using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.API.Extensions
{
    /// <summary> Enum Extension Methods </summary>
    /// <typeparam name="T"> type of Enum </typeparam>
    public class Enum<T> where T : struct, IConvertible
    {
        public static Dictionary<int, string> AsDictionary
        {
            get
            {
                if (!typeof(T).IsEnum)
                    throw new ArgumentException("T must be an enumerated type");

                var dict = new Dictionary<int, string>();
                foreach (var name in Enum.GetNames(typeof(T)))
                {
                    dict.Add((int)Enum.Parse(typeof(T), name), name);
                }

                return dict;
            }
        }


    }
}
