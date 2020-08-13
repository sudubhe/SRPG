
var StringTable = {
	LoadSave_SaveQuestion: '保存在这个文件上吗？',
	LoadSave_NoLoad: '没有可读档的文件',
	LoadSave_NoData: '没有数据',
	LoadSave_Chapter: '章',
	LoadSave_SaveFileMark: '文件',
	LoadSave_Rest: '据点',
	
	Communication_NoData: '没有数据',
	
	GameStart_DifficultySelect: '请选择游戏的难度',
	GameStart_ClearPointDescription: '可以使用胜利点数继承道具。\n想一开始就以强化状态玩游戏的情况下推荐使用。\n\n现在的胜利点数：',
	GameStart_ClearPointQuestion: '继承道具吗？',
	
	UnitSortie_Start: '按空格键',
	UnitSortie_Max: '角色的最大出击数',
	UnitSortie_Question: '开始出击吗？',
	
	Stock_Extract: '取出道具',
	Stock_Store: '存入道具',
	Stock_AllStore: '存入全部道具',
	
	Marshal_StockOperation: '上下键切换角色',
	Marshal_StockTrade: '取出入手的道具',
	Marshal_ItemTrade: '角色间交换道具',
	Marshal_UnitSort: '角色位置排序',
	Marshal_UnitStatus: '确认角色的状态',
	Marshal_Shop: '购买道具',
	Marshal_Bonus: '交换奖金和道具',
	Marshal_ItemUse: '使用道具',
	Marshal_ClassChange: '更改角色的职业',
	
	ItemUse_Unit: '角色',
	ItemUse_Stock: '道具袋',
	ItemUse_Question: '使用这个道具吗？',
	
	ExperienceDistribution_CannotLevelup: '无法继续升级',
	ExperienceDistribution_BonusShortage: '奖金不足',
	
	Extra_Character: '游戏中登场的人物已经记录',
	Extra_Word: '游戏中登场的专门用语已经记录',
	Extra_Gallery: '游戏中显示的图像已经记录',
	Extra_SoundRoom: '游戏中播放的音乐已经记录',
	Extra_Recollection: '游戏中见过一次的场景已经记录',
	
	Config_MusicPlay: '背景音乐音量',
	Config_MusicPlayDescription: '决定背景音乐音量',
	Config_SoundEffect: '效果音音量',
	Config_SoundEffectDescription: '决定效果音音量',
	Config_RealBattle: '真实战斗形式',
	Config_RealBattleDescription: '决定是否在战斗时显示战斗动作',
	Config_AutoTurnEnd: '回合自动结束',
	Config_AutoTurnEndDescription: '决定是否自动结束回合',
	Config_AutoTurnSkip: '跳过敌人回合',
	Config_AutoTurnSkipDescription: '决定是否跳过敌人回合',
	Config_MapGrid: '地图网格线',
	Config_MapGridDescription: '决定是否显示地图网格线',
	Config_UnitSpeed: '角色速度',
	Config_UnitSpeedDescription: '决定角色移动速度',
	Config_MessageSpeed: '信息速度',
	Config_MessageSpeedDescription: '决定显示文字的速度',
	Config_MapUnitWindow: '地图角色窗口',
	Config_MapUnitWindowDescription: '决定是否详细显示角色窗口',
	Config_LoadCommand: '读档命令',
	Config_LoadCommandDescription: '决定是否在战斗时显示读档命令',
	Config_AutoCursor: '自动光标',
	Config_AutoCursorDescription: '决定光标是否对准领头角色',
	Config_MouseOperation: '鼠标操作',
	Config_MouseOperationDescription: '决定鼠标操作是否有效',
	Config_MouseCursorTracking: '鼠标光标跟随',
	Config_MouseCursorTrackingDescription: '决定是否让鼠标光标自动跟随',
	Config_Voice: '声音音量',
	Config_VoiceDescription: '决定声音音量',
	Config_RealBattleScaling: '战斗画面扩大',
	Config_RealBattleScalingDescription: '决定是否在真实战斗时扩大画面',
	Config_ScrollSpeed: '滚动速度',
	Config_ScrollSpeedDescription: '决定角色动作时的滚动速度',
	Config_EnemyMarking: '显示敌人的行动范围',
	Config_EnemyMarkingDescription: '决定通过地图上的取消来让行动范围变得可见',
	Config_MapUnitHpVisible: '显示地图角色生命值',
	Config_MapUnitHpVisibleDescription: '显示地图上角色的生命值',
	Config_MapUnitSymbol: '地图角色记号',
	Config_MapUnitSymbolDescription: '显示地图上角色的所属',
	Config_DamagePopup: '伤害弹窗',
	Config_DamagePopupDescription: '显示战斗时对对方造成的伤害',
	Config_SkipControl: '跳过无效',
	Config_SkipControlDescription: '选择输入跳过无效化的对象',
	
	ItemChange_UnitItemFull: '道具满了\n请按决定或取消',
	ItemChange_TradeTitle: '和这个道具交换吗？',
	ItemChange_StockSendTitle: '入手道具放入道具袋吗？',
	ItemChange_StockThrowTitle: '丢弃入手道具吗？',
	ItemChange_StockItemFull: '道具袋的道具满了\n请交换或废弃',
	ItemChange_TargetItem: '对象道具',
	
	BattleSetup_NoPlayer: '因为玩家不存在，游戏终结',
	
	BattleResult_GetGold: '获得金币',
	BattleResult_GetBonus: '获得奖金',
	BattleResult_GetItem: '获得道具',
	
	Rest_Next: '结束据点吗？',
	
	Quest_Select: '前进到这个地图吗？',
	Quest_EnemyTotal: '敌人的总数',
	Quest_AverageLevel: '敌人的平均水平',
	Quest_GetGold: '获得金币',
	Quest_GetBonus: '获得奖金',
	Quest_GetItem: '得到!',
	
	ClassChange_UnitClassChange: '更改为这个职业吗？',
	ClassChange_UnableClassChange: '这个角色无法更改职业',
	ClassChange_UnableClassChangeMore: '这个角色无法继续更改职业',
	ClassChange_UnableClassChangeItem: '这个角色无法使用这个道具更改职业',
	
	Metamorphoze_Change: '进行形态变化吗？',
	
	ShopLayout_SelectBuy: '买入',
	ShopLayout_SelectSell: '卖出',
	ShopLayout_Unit: '角色',
	ShopLayout_Stock: '道具袋',
	
	ResurrectionLayout_Empty: '选择复活的角色不存在',
	ResurrectionLayout_Question: '复活这个角色吗？',
	
	UnitSummary_Alive: '生存',
	UnitSummary_Death: '死亡',
	UnitSummary_Injury: '负伤',
	UnitSummary_Erase: '消去',
	UnitSummary_Immortal: '不死之身',
	
	SkillList_Owner: '技能所有者',
	
	EventTest_End: '回想结束。',
	EventTest_Key: '通过决定或取消结束。',
	
	QuestionWindow_DefaultCase1: '是',
	QuestionWindow_DefaultCase2: '否',
	
	InfoWindow_Information: '- 注意 -',
	InfoWindow_Warning: '- 警告 –',
	
	ReverseWeapon_Magic: '魔法武器',
	ReverseWeapon_Physics: '物理武器',
	
	MapPosChoose_Unit: '这个角色可以吗？',
	MapPosChoose_Pos: '这个位置可以吗？',
	
	Discard_Warning: '这个道具无法丢弃',
	
	StockItem_ItemDiscard: '丢弃这个道具吗？',
	StockItem_Extract: '取出',
	StockItem_Store: '存入',
	StockItem_AllStore: '全存入',
	
	ItemWork_Equipment: '装备',
	ItemWork_Use: '使用',
	ItemWork_Discard: '丢弃',
	
	ItemInfo_Recovery: '恢复',
	ItemInfo_EntireRecovery: '全员恢复',
	ItemInfo_Damage: '伤害',
	ItemInfo_ClassChange: '职业变化',
	ItemInfo_Doping: '增强',
	ItemInfo_Resurrection: '复活',
	ItemInfo_SkillChange: '习得技能',
	ItemInfo_Quick: '行动恢复',
	ItemInfo_Teleportation: '瞬间移动',
	ItemInfo_Rescue: '救出',
	ItemInfo_Key: '开锁',
	ItemInfo_Durability: '耐用度修复',
	ItemInfo_Steal: '偷盗',
	ItemInfo_State: '状态附加',
	ItemInfo_StateRecovery: '状态恢复',
	ItemInfo_Switch: '特殊',
	ItemInfo_Fusion: '合体',
	ItemInfo_Metamorphoze: '形态变化',
	ItemInfo_Unusable: '不可使用',
	ItemInfo_Custom: '自定义',
	
	ItemWord_SuffixItem: '的道具',
	ItemWord_SuffixWand: '的魔杖',
	ItemWord_MultiAttack: '回攻击',
	
	SkillWord_Less: '％以下',
	SkillWord_Invocation: '发动率',
	FusionWord_Success: '成功率',
	
	UnitSentence_Support: '-支援者-',
	
	UnitType_Player: '本军',
	UnitType_Enemy: '敌军',
	UnitType_Ally: '同盟军',
	
	WeaponOption_HpAbsorb: '吸收生命值',
	WeaponOption_NoGuard: '无视防御',
	WeaponOption_HpMinimum: '生命值变为1',
	WeaponOption_HalveAttack: '攻击减半',
	WeaponOption_HalveAttackBreak: '攻击减半无效',
	WeaponOption_SealAttack: '攻击封锁',
	WeaponOption_SealAttackBreak: '攻击封锁无效',
	
	DamageType_Fixed: '固定',
	DamageType_Physics: '物理',
	DamageType_Magic: '魔法',
	DamageType_Name: '属性',
	
	DurabilityType_Max: '完全恢复',
	DurabilityType_Half: '减半',
	DurabilityType_Break: '破坏',
	
	Chapter_Header: '第',
	Chapter_Footer: '章',
	Chapter_SideStory: '外传',
	Chapter_First: '序章',
	Chapter_Last: '终章',
	Chapter_Rest: '★',
	Chapter_Quest: '探索',
	
	Spped_Direct: '瞬时',
	Speed_High: '高速',
	Speed_Normal: '普通',
	Speed_Low: '低速',
	
	AutoTurnSkip_Direct: '瞬时',
	AutoTurnSkip_Quick: '快进',
	AutoTurnSkip_None: '无',
	
	SkipControl_AllInput: '全输入',
	SkipControl_Mouse: '鼠标',
	SkipControl_None: '无',
	
	MapUnitHp_Number: '数值',
	MapUnitHp_Gauge: '血条',
	MapUnitHp_None: '无',
	
	Objective_Victory: '胜利条件',
	Objective_Defeat: '败北条件',
	
	Select_On: '启动',
	Select_Off: '关闭',
	
	Range_Self: '单个',
	Range_All: '全局',
	
	Recovery_Value: '恢复值',
	Recovery_All: '完全恢复',
	
	Aggregation_SuffixEquipment: ' 装备',
	Aggregation_SuffixPossession: ' 持有',
	Aggregation_SuffixAddition: ' 附加',
	Aggregation_Match: '对象',
	Aggregation_Mismatch: '对象外',
	Aggregation_MatchAll: '全对象',
	Aggregation_MismatchAll: '全对象外',
	
	Key_Target: '对象',
	Key_Gate: '门',
	Key_Treasure: '宝箱',
	
	ItemLost: '已坏',
	ItemSteal: '已被夺走',
	
	ClassChangeInfo_Target: '对象',
	
	Teleportation_Range: '射程',
	
	SkillCategory_BattleAttack: '战斗攻击系',
	SkillCategory_BattleDefence: '战斗防御系',
	SkillCategory_BattleAllowed: '战斗许可系',
	SkillCategory_Allowed: '许可系',
	SkillCategory_Command: '命令系',
	SkillCategory_Action: '动作系',
	SkillCategory_Custom: '自定义',
	
	GetTitle_ItemChange: '得到道具!……',
	GetTitle_SkillChange: '得到技能!……',
	GetTitle_GoldChange: '得到金币!……',
	GetTitle_BonusChange: '得到奖金!……',
	
	LostTitle_ItemChange: '失去道具……',
	LostTitle_SkillChange: '失去技能……',
	LostTitle_GoldChange: '失去金币……',
	LostTitle_BonusChange: '失去奖金……',
	
	GetTitle_ExperiencePlus: '额外得到!',
	GetTitle_NewSkill: '新技能!……',
	GetTitle_PowerupSkill: '力量增加!……',
	
	UnitSimple_Target: '目标……',
	
	State_Addition: '附加',
	State_Recovery: '治愈',
	State_Regist: '耐受性',
	State_AllBadState: '全糟糕状态',
	
	HideData_Secret: '-秘密-',
	HideData_Question: '???',
	HideData_Unknown: '未知',
	
	AttackMenu_AttackCount: '攻击次数',
	
	PlayerActive: '本军角色',
	
	SkipProgress: '正在跳过…',
	
	PlayTime: 'Play Time',
	
	Status_Level: 'Lv',
	Status_Experience: 'Ex',
	
	Signal_Turn: '回合',
	Signal_Gold: '金币',
	Signal_Bonus: '奖金',
	
	CurrencySign_Gold: 'G',
	CurrencySign_Bonus: 'B',
	CurrencySign_Point: 'P',
	
	SignWord_Multiple: '×',
	SignWord_Percent: '％',
	SignWord_WaveDash: '～',
	SignWord_Limitless: '--'
};

var ContentLayout = {
	ITEM_SPACE: 60,
	KEYWORD_HEIGHT: 1
};

var HorizontalLayout = {
	OBJECT_SPACE: 0,
	OBJECT_WIDTH: 0
};
