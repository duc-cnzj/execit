package scopes

import "gorm.io/gorm"

func Paginate(page, pageSize *int) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		if *page <= 0 {
			*page = 1
		}
		if *pageSize <= 0 {
			*pageSize = 15
		}

		offset := (*page - 1) * *pageSize

		return db.Offset(offset).Limit(*pageSize)
	}
}
