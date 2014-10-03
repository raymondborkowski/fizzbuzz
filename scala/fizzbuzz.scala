val a = Map(3 -> "Fizz", 5 -> "Buzz")

(1 to 100).map(i => a.collect{case e @ (_:Int, _:String) if i % e._1 == 0 => e._2} match {case Nil=> List(i.toString) case l=> l}).foreach(x => println(x.mkString))
