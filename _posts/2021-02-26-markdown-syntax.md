---
layout: post
title: "1. 마크다운 문법"
date: 2021-02-26
excerpt: "마크다운 문법"
tag:
- markdown
- syntax
- 마크다운
- 마크다운 문법
comments: false
---

# 마크다운 문법

## 1. 제목

{% highlight html %}
# h1
{% endhighlight %}

# Heading 1

{% highlight html %}
# h2
{% endhighlight %}

## Heading 2

{% highlight html %}
# h3
{% endhighlight %}

### Heading 3

{% highlight html %}
# h4
{% endhighlight %}

#### Heading 4

{% highlight html %}
# h5
{% endhighlight %}

##### Heading 5

{% highlight html %}
# h6
{% endhighlight %}

###### Heading 6

## 2. 텍스트

{% highlight html %}
**볼드체**
__볼드체__
{% endhighlight %}

**볼드체**   
__볼드체__

{% highlight html %}
*이텔릭체*
_이텔릭체_
{% endhighlight %}

*이텔릭체*   
_이텔릭체_

{% highlight html %}
~~취소선~~
{% endhighlight %}

~~취소선~~

{% highlight html %}
<u>밑줄</u>
{% endhighlight %}

<u>밑줄</u>

{% highlight html %}
> 인용구
{% endhighlight %}

> 인용구
>> 인용구인용구

## 3. 이미지

{% highlight html %}
![이미지이름](https://Jumim.github.io/assets/img/test.jpg)

<img src="https://Jumim.github.io/assets/img/test.jpg" alt="test" width="600">
{% endhighlight %}

![test](https://Jumim.github.io/assets/img/test.jpg "test")

<img src="https://Jumim.github.io/assets/img/test.jpg" alt="test" width="600">

img 태그로 쓰면 width="" height="" 추가해서 사이즈 조절 가능!

## 4. 리스트
{% highlight html %}
1. Item one
   1. sub item one
   2. sub item two
   3. sub item three
2. Item two
{% endhighlight %}

1. Item one
   1. sub item one
   2. sub item two
   3. sub item three
2. Item two

{% highlight html %}
* Item one
* Item two

+ red
  + blue
    + green

- red
  - blue
    - green
{% endhighlight %}

* Item one
* Item two

+ red
  + blue
    + green

- red
  - blue
    - green

## 5. 링크
{% highlight html %}
[타이틀](https://jumim.github.io/)
<https://jumim.github.io//test/>
{% endhighlight %}

[개발의 줌인](https://jumim.github.io/)  
<https://jumim.github.io/>

## 6. 내용
{% highlight html %}
* * *

***

*****

- - -

---------------------------------------
{% endhighlight %}

* * *

***

*****

- - -

---------------------------------------

수평선

{% highlight html %}
공백 두칸 추가하면  줄 바꿈
{% endhighlight %}

줄바꾸기   
3칸이상 띄어쓰기하면 줄바꿈!!   



---



## 7. 그 밖의 유용한 기능
### 7-1. 표
{% highlight html %}
| Header1 | Header2 | Header3 |
|:--------:|:-------:|:--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=====
| Foot1   | <span style="color: blue">Foot2</span>   | Foot3
{: rules="groups"}
{: class="test_table"}
{% endhighlight %}

| Header1 | Header2 | Header3 |
|:--------:|:-------:|:--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=====
| Foot1   | Foot2   | Foot3
{: rules="groups"}

|:--------:|:-------:|:--------:|  
구분선에 콜론(:)을 왼쪽, 오른쪽, 양쪽에 표시하면 각각 왼쪽 정렬, 오른쪽 정렬, 가운데 정렬이 된다!

### 7-2. 수식


### 7-3. 코드블럭
{% highlight html %}
<pre>
<code>
public class Test {
  public static void main(String[] args) {
    System.out.println("Hello, world!");
  }
}
</code>
</pre>

```java
public class Test {
  public static void main(String[] args) {
    System.out.println("Hello, world!");
  }
}
```
{% endhighlight %}

<pre>
<code>
public class Test {
  public static void main(String[] args) {
    System.out.println("Hello, world!");
  }
}
</code>
</pre>

```java
public class Test {
  public static void main(String[] args) {
    System.out.println("Hello, world!");
  }
}
```

#__계속 추가예정__
