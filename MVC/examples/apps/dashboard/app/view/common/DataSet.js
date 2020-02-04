Ext.define('Dashboard.view.common.DataSet',{
	singleton : true,
	portletGroups : [ [ 'Study', 'Study' ],
	                  [ 'IRB', 'Country & Study' ],
	                  [ 'CDMS', 'Status Chart' ]
	],

	Study : [ [ 'Dashboard.view.portlet.GridPortlet', 'Angular Portler' ],
	          [ 'Dashboard.view.portlet.GridPortlet', 'Angular Portler' ],
	          [ 'Dashboard.view.portlet.GridPortlet', 'ScrollColumn2D Portlet' ],
	          [ 'Dashboard.view.portlet.GridPortlet', 'ScrollStackedColumn2D Portlet' ],
	          [ 'Dashboard.view.portlet.GridPortlet', 'ZoomLineChart Portlet' ]
	],
	CDMS : [
            [ 'Dashboard.view.portlet.GridPortlet', '그리드 포틀렛5' ],
	         [ 'Dashboard.view.portlet.GridPortlet', '그리드 포틀렛6' ],
	         [ 'Dashboard.view.portlet.GridPortlet', '그리드 포틀렛6' ],
	         [ 'Dashboard.view.portlet.GridPortlet', '그리드 포틀렛6' ],
	         [ 'Dashboard.view.portlet.GridPortlet', '그리드 포틀렛6' ],
	         [ 'Dashboard.view.portlet.GridPortlet', '그리드 포틀렛6' ],
	         [ 'Dashboard.view.portlet.GridPortlet', '그리드 포틀렛6' ],
	         [ 'Dashboard.view.portlet.GridPortlet', '그리드 포틀렛7' ],
	         [ 'Dashboard.view.portlet.GridPortlet', '그리드 포틀렛8' ]
	],
	IRB : [
            [ 'Dashboard.view.portlet.GridPortlet', '그리드 포틀렛9' ],
	        [ 'Dashboard.view.portlet.GridPortlet', '그리드 포틀렛10' ],
	        [ 'Dashboard.view.portlet.GridPortlet', '그리드 포틀렛11' ],
	        [ 'Dashboard.view.portlet.GridPortlet', '그리드 포틀렛12' ]
	],

	dbData : [
        ['CLS001', 'Dashboard.view.portlet.StudyList', 'StudyList', 500, 'db-left', '1','Study',{var1:'A', var2: 'B'} ],
	           ['CLS002', 'Dashboard.view.portlet.CountryStudy', 'CountryStudy', 100, 'db-tab1-left', '.5' ,'Study',{var1:'A', var2: 'B'} ],
	           ['CLS008', 'Dashboard.view.portlet.GridPortlet', 'ScrollColumn2D', 100, 'db-tab2-right', '.5' ,'Study',{var1:'A', var2: 'B'} ],
	           ['CLS009', 'Dashboard.view.portlet.GridPortlet', 'ScrollStackedColumn2D', 100, 'db-tab2-right', '.5' ,'Study',{var1:'A', var2: 'B'} ],
	           ['CLS010', 'Dashboard.view.portlet.GridPortlet', 'GridPortlet', 100, 'db-tab2-left', '.5' ,'Study',{var1:'A', var2: 'B'} ],
	           ['CLS011', 'Dashboard.view.portlet.GridPortlet', 'GridPortlet', 100, 'db-tab2-left', '.5' ,'Study',{var1:'A', var2: 'B'} ]
	],
	titleData :  [
	              ['서울지역'],['경기지역'],['호남지역'],['영남지역'],['경남지역'],['경북지역'],['제지역']
	],
	studyListData :  [['CODE09-011','1st Data Search','호남지역 11구역','경기지역 34구','95','24/93','가동률1','81','521/952','총사용량','75','310/524','기타용량','27','120','27','전월사용총','21/345','전월','3/10','당월','1/6','예상'],
                      ['CODE09-011','1st Data Search','호남지역 11구역','경기지역 34구','95','24/93','가동률1','81','521/952','총사용량','75','310/524','기타용량','27','120','27','전월사용총','21/345','전월','3/10','당월','1/6','예상']
	],
	country_study : [['경기 고양시..','코드00-0911-001-01','변경사항 적용예정', '20', '10','3', '5'],
	                 ['경기 고양시..','코드00-0911-001-01','변경사항 적용예정', '54', '27','3', '5'],
	                 ['경기 고양시..','코드00-0911-001-01','변경사항 적용예정', '20', '27','3', '5'],
	                 ['경기 고양시..','코드00-0911-001-01','변경사항 적용예정', '20', '33','3', '5'],
	                 ['경기 고양시..','코드00-0911-001-01','변경사항 적용예정', '20', '14','3', '5'],
	                 ['경기 고양시..','코드00-0911-001-01','변경사항 적용예정', '28', '87','3', '5'],
	                 ['경기 고양시..','코드00-0911-001-01','변경사항 적용예정', '23', '24','3', '5'],
	                 ['경기 고양시..','코드00-0911-001-01','변경사항 적용예정', '24', '55','3', '5'],
	                 ['경기 고양시..','코드00-0911-001-01','변경사항 적용예정', '25', '58','3', '5'],
	                 ['경기 고양시..','코드00-0911-001-01','변경사항 적용예정', '26', '41','3', '5'],
	                 ['경기 고양시..','코드00-0911-001-01','변경사항 적용예정', '27', '11','3', '5'],
	                 ['경기 고양시..','코드00-0911-001-01','변경사항 적용예정', '90', '100','3', '5'],
	],
	studyChart : [['경기','50','84','74','45/347','74/454','25/654'],
	              ['서울','25','10','74','45/347','74/454','25/654'],
	              ['경남','15','15','74','45/120','74/454','25/654'],
	              ['경북','44','20','74','45/347','74/454','25/654'],
	              ['전남','20','34','74','45/250','74/454','25/654'],
	              ['전북','78','44','74','45/347','74/454','25/654'],
	              ['제주','40','50','74','45/347','74/454','25/654'],
	              ['강원','11','61','74','45/347','74/454','25/654']
	]
		});