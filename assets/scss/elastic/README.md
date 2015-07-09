Elastic
=======

Simple CSS columns that stretch and Stack.

The Idea behind Elastic comes from the excellent Grater by Sams Soffes. I wanted a simple yet reliable Grid system that could adapt to larger screens, as well as the smallest screens, with consistent Gutters and Margins. Elastic Comes with Five types of Columns: Single, Full, Two, Three, & Four Columns. Individual Column Elements are contained inside Elastic Containers with the ``.elastic-container`` class. These Containers have a maximum width of ``1080px``.Each Column should be seperated into an individual Row. How Rows are implemented is up to you. Example:

```html
<div class="row">
	<div class="elastic-container">
		<div class="elastic">
			<div><p>Lorem ipsum dolor sit amet.</p></div>
			<div><p>Lorem ipsum dolor sit amet.</p></div>
		</div>
	</div>
</div>
```

This Produces a Two Column Elastic Container. The Columns Stack below ``660px``, which is about tablet size.

The Columns are built using precise percent widths. To make gutters and margins consistent across column sizes, every column is given a padding of ``0px 20px`` so that outside margins are at the least ``20px`` and interior gutters are always ``40px``. This is accomplished by using the ``box-sizing:border-box`` property on each column.


## Compatability

Elastic isn't compatible with IE8 or below. But you know, whatever.

## Todo

- [ ] Begin Versioning
- [ ] Installation Instructions
- [ ] Sass syntax, and compiled versions
- [ ] Descriptive Images
- [ ] github-pages usage guide.
