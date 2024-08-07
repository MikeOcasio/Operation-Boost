# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_07_11_233416) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "product_id", null: false
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_carts_on_product_id"
    t.index ["user_id"], name: "index_carts_on_user_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_active", default: true, null: false
  end

  create_table "jwt_denylists", force: :cascade do |t|
    t.string "jti"
    t.datetime "expired_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["jti"], name: "index_jwt_denylists_on_jti"
  end

  create_table "notifications", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.text "content"
    t.string "status"
    t.string "notification_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_notifications_on_user_id"
  end

  create_table "order_products", force: :cascade do |t|
    t.bigint "order_id", null: false
    t.bigint "product_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["order_id"], name: "index_order_products_on_order_id"
    t.index ["product_id"], name: "index_order_products_on_product_id"
  end

  create_table "orders", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "status"
    t.decimal "total_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "promotion_id"
    t.bigint "assigned_skill_master_id"
    t.string "internal_id"
    t.decimal "price"
    t.decimal "tax"
    t.index ["assigned_skill_master_id"], name: "index_orders_on_assigned_skill_master_id"
    t.index ["promotion_id"], name: "index_orders_on_promotion_id"
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "preferred_skill_masters", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "preferred_skill_master_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["preferred_skill_master_id"], name: "index_preferred_skill_masters_on_preferred_skill_master_id"
    t.index ["user_id"], name: "index_preferred_skill_masters_on_user_id"
  end

  create_table "product_attribute_categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "product_promotions", force: :cascade do |t|
    t.bigint "product_id", null: false
    t.bigint "promotion_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_product_promotions_on_product_id"
    t.index ["promotion_id"], name: "index_product_promotions_on_promotion_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.decimal "price"
    t.string "image"
    t.bigint "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "order_id"
    t.bigint "cart_id"
    t.bigint "product_attribute_category_id"
    t.boolean "is_priority", default: false
    t.decimal "tax"
    t.index ["cart_id"], name: "index_products_on_cart_id"
    t.index ["category_id"], name: "index_products_on_category_id"
    t.index ["order_id"], name: "index_products_on_order_id"
    t.index ["product_attribute_category_id"], name: "index_products_on_product_attribute_category_id"
  end

  create_table "promotions", force: :cascade do |t|
    t.string "code"
    t.decimal "discount_percentage"
    t.datetime "start_date", precision: nil
    t.datetime "end_date", precision: nil
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sessions", force: :cascade do |t|
    t.string "session_id", null: false
    t.text "data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_id"], name: "index_sessions_on_session_id", unique: true
    t.index ["updated_at"], name: "index_sessions_on_updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "first_name"
    t.string "last_name"
    t.string "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "encrypted_data"
    t.text "encrypted_symmetric_key"
    t.integer "preferred_skill_master_ids", default: [], array: true
    t.string "encrypted_password"
    t.datetime "remember_created_at"
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.integer "sign_in_count"
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.integer "failed_attempts"
    t.string "unlock_token"
    t.datetime "locked_at"
    t.string "otp_secret"
    t.integer "consumed_timestep"
    t.boolean "otp_required_for_login"
    t.index ["preferred_skill_master_ids"], name: "index_users_on_preferred_skill_master_ids"
  end

  add_foreign_key "carts", "products"
  add_foreign_key "carts", "users"
  add_foreign_key "notifications", "users"
  add_foreign_key "order_products", "orders"
  add_foreign_key "order_products", "products"
  add_foreign_key "orders", "promotions"
  add_foreign_key "orders", "users"
  add_foreign_key "orders", "users", column: "assigned_skill_master_id"
  add_foreign_key "preferred_skill_masters", "preferred_skill_masters"
  add_foreign_key "preferred_skill_masters", "users"
  add_foreign_key "product_promotions", "products"
  add_foreign_key "product_promotions", "promotions"
  add_foreign_key "products", "carts"
  add_foreign_key "products", "categories"
  add_foreign_key "products", "orders"
  add_foreign_key "products", "product_attribute_categories"
end
