Ext.define('Home.view.DataSet',{
	singleton : true,
	portletGroups : [ [ 'Study', 'Study' ],
	                  [ 'IRB', 'Country & Study' ],
	                  [ 'CDMS', 'Status Chart' ]
	],

	Study : [ [ 'Ctms.view.portlet.GridPortlet', 'Angular Portler' ],
	          [ 'Ctms.view.portlet.GridPortlet', 'Angular Portler' ],
	          [ 'Ctms.view.portlet.GridPortlet', 'ScrollColumn2D Portlet' ],
	          [ 'Ctms.view.portlet.GridPortlet', 'ScrollStackedColumn2D Portlet' ],
	          [ 'Ctms.view.portlet.GridPortlet', 'ZoomLineChart Portlet' ]
	],
	CDMS : [ [ 'Ctms.view.portlet.GridPortlet', '그리드 포틀렛5' ],
	         [ 'Ctms.view.portlet.GridPortlet', '그리드 포틀렛6' ],
	         [ 'Ctms.view.portlet.GridPortlet', '그리드 포틀렛6' ],
	         [ 'Ctms.view.portlet.GridPortlet', '그리드 포틀렛6' ],
	         [ 'Ctms.view.portlet.GridPortlet', '그리드 포틀렛6' ],
	         [ 'Ctms.view.portlet.GridPortlet', '그리드 포틀렛6' ],
	         [ 'Ctms.view.portlet.GridPortlet', '그리드 포틀렛6' ],
	         [ 'Ctms.view.portlet.GridPortlet', '그리드 포틀렛7' ],
	         [ 'Ctms.view.portlet.GridPortlet', '그리드 포틀렛8' ]
	],
	IRB : [ [ 'Ctms.view.portlet.GridPortlet', '그리드 포틀렛9' ],
	        [ 'Ctms.view.portlet.GridPortlet', '그리드 포틀렛10' ],
	        [ 'Ctms.view.portlet.GridPortlet', '그리드 포틀렛11' ],
	        [ 'Ctms.view.portlet.GridPortlet', '그리드 포틀렛12' ]
	],

	dbData : [ ['CLS001', 'Ctms.view.portlet.StudyList', 'StudyList', 500, 'db-left', '1','Study',{var1:'A', var2: 'B'} ],
	           ['CLS002', 'Ctms.view.portlet.CountryStudy', 'CountryStudy', 100, 'db-tab1-left', '.5' ,'Study',{var1:'A', var2: 'B'} ],
	           ['CLS008', 'Ctms.view.portlet.GridPortlet', 'ScrollColumn2D', 100, 'db-tab2-right', '.5' ,'Study',{var1:'A', var2: 'B'} ],
	           ['CLS009', 'Ctms.view.portlet.GridPortlet', 'ScrollStackedColumn2D', 100, 'db-tab2-right', '.5' ,'Study',{var1:'A', var2: 'B'} ],
	           ['CLS010', 'Ctms.view.portlet.GridPortlet', 'GridPortlet', 100, 'db-tab2-left', '.5' ,'Study',{var1:'A', var2: 'B'} ],
	           ['CLS011', 'Ctms.view.portlet.GridPortlet', 'GridPortlet', 100, 'db-tab2-left', '.5' ,'Study',{var1:'A', var2: 'B'} ]
	],
	titleData :  [
	              ['Country & Study'],['Status Chart']
	],
	studyListData :  [['서울','G001'],
	                  ['경기','G002']
	],
	country_study : [['강남구','SB001'],
	                 ['강동구','SB001'],
	                 ['강서구','SB001'],
	                 ['강북구','SB001'],
	                 ['마포구','SB001']
	],
	studyChart : [['도곡동'],
	              ['상암동'],
	              ['역삼동'],
	              ['응암동'],
	              ['전농동'],
	              ['화곡동']
	]
		});